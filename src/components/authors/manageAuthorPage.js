"use strict";

var React = require("react");
var AuthorForm = require("./authorForm");

var ManageAuthor = React.createClass({
    getInitialState: function() {
        return {
            author: {
                id: '',
                firstName: '',
                lastName: ''
            }
        };
    },
    setAuthorState: function(event) {
        var field = event.target.name;
        var value = event.target.value;
        this.state.author[field] = value;
        console.log(this.state.author);
        return this.setState({author: this.state.author});
    },
    render: function() {
        return (
            <AuthorForm
                author={this.state.author}
                onChange={this.setAuthorState}
            />
        );
    }
});

module.exports = ManageAuthor;
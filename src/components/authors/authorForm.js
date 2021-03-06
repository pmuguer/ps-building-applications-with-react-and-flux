"use strict";

var React = require("react");
var Input = require("../common/textInput.js");

var AuthorForm = React.createClass({
    propTypes: {
        author: React.PropTypes.object.isRequired,
        onChange: React.PropTypes.func.isRequired
    },

    render: function() {
        return (
            <form>
                <h1>Manage author</h1>

                <Input
                    name="firstName"
                    label="First Name"
                    value={this.props.author.firstName}
                    onChange={this.props.onChange}
                />
                
                <Input
                    name="lastName"
                    label="Last Name"
                    value={this.props.author.lastName}
                    onChange={this.props.onChange}
                />

                <input
                    type="submit"
                    value="Save"
                    className="btn btn default"
                    onClick={this.props.onSave}
                 />
            </form>
        );
    }
});

module.exports = AuthorForm;
"use strict";

var React = require("react");
var AuthorApi = require("../../api/authorApi");
var AuthorList = require("./authorList");
var Link = require("react-router").Link;

class Authors extends React.Component {
    getInitialState() {
        let retval = {
            authors: []
        };
        return retval;
    }

    componentWillMount() {
        this.setState({ authors: AuthorApi.getAllAuthors() });
    }

    render() {
        return (
            <div>
                <h1>Authors</h1>
                <Link to="addAuthor" className="btn btn-default">Add Author</Link>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = Authors;
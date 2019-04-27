"use strict";

var React = require("react");
var AuthorApi = require("../../api/authorApi");
var AuthorList = require("./authorList");

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
        function createTableRow(author) {
            return (
                <tr key={author.id}>
                    <td><a href={"/#authors/" + author.id}>{author.id}</a></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        }
        return (
            <div>
                <h1>Authors</h1>
                <AuthorList authors={this.state.authors} />
            </div>
        );
    }
}

module.exports = Authors;
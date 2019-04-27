"use strict";

var React = require("react");
var AuthorApi = require("../../api/authorApi");

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
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {/* this.state.authors es un array; por eso
                            se puede usar la función map() */}
                        {this.state.authors.map(createTableRow)}
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = Authors;
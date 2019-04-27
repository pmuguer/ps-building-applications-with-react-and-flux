"use strict";

var React = require("react");

class AuthorList extends React.Component {
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
                <table className="table">
                    <thead>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {/* this.state.authors es un array; por eso
                            se puede usar la función map() */}
                        {this.props.authors.map(createTableRow)}
                    </tbody>
                </table>
            </div>
        );
    }
}

module.exports = AuthorList;
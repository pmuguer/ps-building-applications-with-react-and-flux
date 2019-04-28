"use strict";

var React = require("react");
var Link = require("react-router").Link;

var AuthorList = React.createClass({
    render: function() {
        function createTableRow(author) {
            return (
                <tr key={author.id}>
                    <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
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
});

module.exports = AuthorList;
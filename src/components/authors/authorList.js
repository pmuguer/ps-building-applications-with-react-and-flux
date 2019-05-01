"use strict";

var React = require("react");
var Link = require("react-router").Link;
var AuthorActions = require('../../actions/authorActions');
var toastr = require('toastr');

var AuthorList = React.createClass({
    deleteAuthor: function(id, event) {
        event.preventDefault();
        AuthorActions.deleteAuthor(id);
        toastr.success('Author Deleted');
    },

    render: function() {
        var createTableRow = function(author) {
            return (
                <tr key={author.id}>
                    <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                    <td><Link to="manageAuthor" params={{id: author.id}}>{author.id}</Link></td>
                    <td>{author.firstName} {author.lastName}</td>
                </tr>
            );
        };
        return (
            <div>
                <table className="table">
                    <thead>
                        <th></th>
                        <th>ID</th>
                        <th>Name</th>
                    </thead>
                    <tbody>
                        {/* this.props.authors es un array; por eso
                            se puede usar la función map()

                            Es importante pasar this como parámetro (ver thisArg):
                            https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/Array/map#Parameters

                            Ver también: http://disq.us/p/21hmmw7

                            Si no se pasa this, el siguiente código falla:
                            <td><a href="#" onClick={this.deleteAuthor.bind(this, author.id)}>Delete</a></td>
                            
                            porque en ese caso el this de la expresión this.deleteAuthor es "undefined"
                            */}
                        {this.props.authors.map(createTableRow, this)}
                    </tbody>
                </table>
            </div>
        );
    }
});

module.exports = AuthorList;
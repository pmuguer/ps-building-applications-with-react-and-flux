"use strict";

var React = require("react");
var AuthorForm = require("./authorForm");

class ManageAuthor extends React.Component {
    render() {
        return (
            <AuthorForm />
        );
    }
}

module.exports = ManageAuthor;
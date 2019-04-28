"use strict";

var React = require("react");
var Link = require("react-router").Link;

class NotFoundPage extends React.Component {
    render() {
        return (
            <div>
                <h1>Page Not Found</h1>
                <p>Whoops! Page not found</p>
                <p><Link to="app">Back to home</Link></p>
            </div>
        );
    }
}

module.exports = NotFoundPage;
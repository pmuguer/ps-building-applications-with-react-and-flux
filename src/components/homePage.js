"use strict";

var React = require("react");
var Router = require("react-router");
var Link = Router.Link;

class Home extends React.Component {
    render() {
        return (
        <div>
            <h1 className="jumbotron">A react component</h1>
            <p>A super fast frontend library</p>
            <Link to="about" className="btn btn-primary btn-lg">Learn more</Link>
        </div>);
    }
}

module.exports = Home;
"use strict";

var React = require("react");

class Home extends React.Component {
    render() {
        return (<div>
            <h1 className="jumbotron">A react component</h1>
            <div>
                <h2>A super fast frontend library</h2>
            </div>
        </div>);
    }
}

module.exports = Home;
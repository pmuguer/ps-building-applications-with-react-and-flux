"use strict";

var React = require('react');
var Header = require('../components/common/header');
var RouteHandler = require('react-router').RouteHandler;

class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <RouteHandler/>
            </div>
        );
    }
}

module.exports = App;
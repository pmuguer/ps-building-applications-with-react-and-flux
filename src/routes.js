"use strict";

var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var App = require("./components/app");

var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={App} >
    </Route>
);

module.exports = routes;
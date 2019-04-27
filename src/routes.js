"use strict";

var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var App = require("./components/app");
var Authors = require("./components/authors/authorPage");

var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={Authors} >
        <Route name="authors" handler={Authors} />
    </Route>
);

module.exports = routes;
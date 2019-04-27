"use strict";

var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var App = require("./components/app");
var Authors = require("./components/authors/authorPage");
var About = require("./components/about/homePage");

var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={App} >
        <DefaultRoute handler={require("./components/homePage")} />
        <Route name="authors" handler={Authors} />
        <Route name="about" handler={About} />
    </Route>
);

module.exports = routes;
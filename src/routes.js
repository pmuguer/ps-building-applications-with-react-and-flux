"use strict";

var React = require("react");
var Router = require("react-router");
var DefaultRoute = Router.DefaultRoute;
var App = require("./components/app");
var Authors = require("./components/authors/authorPage");
var About = require("./components/about/homePage");
var NotFoundRoute = Router.NotFoundRoute;
var PageNotFound = require("./components/common/notFoundPage");
var ManageAuthor = require("./components/authors/manageAuthorPage");

var Route = Router.Route;

var routes = (
    <Route name="app" path="/" handler={App} >
        <DefaultRoute handler={require("./components/homePage")} />
        <Route name="authors" handler={Authors} />
        <Route name="about" handler={About} />
        <Route name="addAuthor" handler={ManageAuthor} />
        <NotFoundRoute handler={PageNotFound} />
    </Route>
);

module.exports = routes;
"use strict";
var $ = require('jquery');
var jQuery = $;
var React = require('react');

var Router = require('react-router');
var routes = require('./routes');
var App = require('./components/app');

/*React.render(<App />, document.getElementById('app'));
*/


Router.run(routes, function(Handler) {
    React.render(<Handler />, document.getElementById("app"));
});
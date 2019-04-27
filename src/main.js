// Bootrap espera que jquery esté en el global namespace
$ = jQuery = require('jquery');
var React = require('react');
var Home = require('./components/homePage');

React.render(<Home />, document.getElementById("app"));
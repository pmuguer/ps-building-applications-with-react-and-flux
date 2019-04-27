"use strict";
var $ = require('jquery');
var jQuery = $;
var React = require('react');
var Home = require('./components/homePage');
var About = require('./components/about/homePage');
var Header = require('./components/common/header');
var Authors = require('./components/authors/authorPage');

class App extends React.Component {
    render() {
        var Child;
        switch (this.props.route) {
            case 'about': Child = About; break;
            case 'authors': Child = Authors; break;
            default: Child = Home;
        }
        return (
            <div>
                <Header />
                <Child />
            </div>
        );
    }
}

function render() {
    var route = window.location.hash.substr(1);
    React.render(<App route={route} />, document.getElementById("app"));
}

window.addEventListener('hashchange', render);
render();
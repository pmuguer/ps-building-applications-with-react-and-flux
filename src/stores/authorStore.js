"use strict";

var Dispatcher = require('../dispatcher/appDispatcher');
var ActionTypes = require('../constants/actionTypes');
// events es un módulo de Node; utilizado para
// broadcast de eventos
var EventEmitter = require('events').EventEmitter;
var assign = require("object-assign");
var CHANGE_EVENT = 'change';

// "Mixin": prototype + el objeto que se define
var AuthorStore = assign({}, EventEmitter.prototype, {
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    },

    emitChange: function() {
        this.emit(CHANGE_EVENT);
    }
});

/*
Dispatcher.register(function(action) {
    switch(action.ActionTypes) {

    }
}); */

module.exports = AuthorStore;
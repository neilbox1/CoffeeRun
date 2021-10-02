(function (window) {
    'use strict';
    var App = window.App || {};

    function DataStore() {
        console.log('running the DataStore function');
        this.data = {};
    }

    DataStore.prototype.add = function (key, val) {
        this.data[key] = val;
    };

    DataStore.prototype.get = function (key) {
        return this.data[key];
    };

    DataStore.prototype.getAll = function () {
        return this.data;
    };

    DataStore.prototype.remove = function (key) {
        delete this.data[key];
    };

    App.DataStore = DataStore;
    window.App = App;
})(window);

var dsOne = new App.DataStore();
var dsTwo = new App.DataStore();
dsOne.data['email'] = 'james@bond.com';
dsOne.data['order'] = 'black coffee';
dsTwo.data['email'] = 'moneypenny@bond.com';
dsTwo.data['order'] = 'chai tea';
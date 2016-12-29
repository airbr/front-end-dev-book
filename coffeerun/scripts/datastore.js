(function (window) {
  'use strict';
  var App = window.app || {};
  //If already APP prop of Window, assign App to it. If not, created empty object
  //|| is default operator
  function DataStore() {
    console.log('running the Datastore function');
    this.data = {};
    }

    DataStore.prototype.get = function (key) {
      return this.data[key];
    }

    DataStore.prototype.getAll = function (key) {
      return this.data;
    }

    DataStore.prototype.add = function (key, val) {
      this.data[key] = val;
    }

    DataStore.prototype.remove = function (key) {
      delete this.data[key];
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);

(function (window) {
  'use strict';
  var App = window.app || {};
  //If already APP prop of Window, assign App to it. If not, created empty object
  //|| is default operator
  function DataStore() {
    console.log('running the Datastore function');
    }

    App.DataStore = DataStore;
    window.App = App;
})(window);

(function (window) {
    'use strict';
    var App = window.App;
    var Truck = App.Truck;
    var DataStore = App.DataStore;
    var myTruck = new Truck('ABC', new DataStore());
    window.myTruck = myTruck;
})(window);
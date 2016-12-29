(function (window) {
    'use strict';
    var App = window.App || {};
    //If already APP prop of Window, assign App to it. If not, created empty object
    //|| is default operator
    function Truck(truckId, db) {
        this.truckId = truckId;
        this.db = db;
    }
  
    Truck.prototype.createOrder = function (order) {
        console.log('Adding order for ' + order.emailAddress);
        this.db.add(order.emailAddress, order);
    };

    Truck.prototype.deliverOrder = function (customerId) {
        console.log('Delivering order for ' + customerId);
        this.db.remove(customerId);
    };

    Truck.prototype.printOrders = function () {
        var customerIdArray = Object.keys(this.db.getAll());

        console.log('Truck #' + this.truckId + ' has pending orders:');
        customerIdArray.forEach(function (id) {
            console.log(this.db.get(id));
        // Either bind or this works-  forEach has optional second argument to use as value of this in callback
        //  }.bind(this));
        }, this);
    };

    App.Truck = Truck;
    window.App = App;
})(window);
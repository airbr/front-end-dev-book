(function(window) {
  'use strict';
  var App = window.App || {};
  var $ = window.jQuery;

  function FormHandler(selector) {
    if (!selector) {
      throw new Error('No selector provided');
    }

    this.$formElement = $(selector);
    if (this.$formElement.length === 0) {
      throw new Error('Could not find element with selector: ' + selector);
    }

    FormHandler.prototype.addSubmitHandler = function(fn) {
      console.log('Setting submit handler for form');
      this.$formElement.on('submit', function(event) {
        event.preventDefault();

        // var data = {
        //   coffee: this.elements.coffee.value,
        //   email: this.elements.emailAddress.value,
        //   size: this.elements.size.value,
        //   flavor: this.elements.flavor.value,
        //   strength: this.elements.strength.value
        // };
        var data = {};
        $(this).serializeArray().forEach(function(item) {
          data[item.name] = item.value;
          console.log(item.name + ' is' + item.value);
        });

        console.log(data);
        fn(data);
        this.reset();
        this.elements[0].focus();
      });
    };
  }
  App.FormHandler = FormHandler;
  window.App = App;
})(window);

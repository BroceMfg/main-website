'use strict';

angular.module('broce')
  .controller('MainController', [MainController]);

// this controller is for the initial app view
function MainController () {
  // because scope in javascript is weird we use controller as and vm = this
  var vm = this;
  vm.title = 'Broce Broom';
  vm.subtitle = 'Welcome to Broce Manufacturing!';
}

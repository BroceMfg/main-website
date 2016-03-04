'use strict';

angular.module('broce')
  .controller('MainController', [MainController]);

function MainController () {
  var vm = this;
  vm.title = 'Broce Broom';
  vm.subtitle = 'Welcome to Broce Manufacturing!';
}

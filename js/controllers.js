'use strict';

angular.module('broce')
  .controller('MainController', [MainController])
  .controller('PartsAuth', ['PartsAuthService', PartsAuthController]);

function MainController () {
  var vm = this;
  vm.title = 'Broce Broom';
  vm.subtitle = 'Welcome to Broce Manufacturing!';
}

function PartsAuthController (PartsAuthService) {
  var vm = this;
  vm.title = 'Sign in here to order parts for your Broce Broom';
  vm.signinShow = true;
  vm.signupShow = false;
  vm.showSignup = showSignup;
  vm.showSignin = showSignin;
  vm.postSignUp = postSignUp;
  vm.postSignIn = postSignIn;

  vm.signupForm = {};

  function showSignup() {
    vm.signinShow = false;
    vm.signupShow = true;
  }
  function showSignin(){
    vm.signinShow = true;
    vm.signupShow = false;
  }

  function postSignUp(signupForm){
    PartsAuthService.postSignUp(signupForm);
  }
  
  function postSignIn(email, password){

  }
}

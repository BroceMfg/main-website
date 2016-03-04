'use strict';

angular.module('broce')
  .controller('AuthorizationController', ['PartsAuthService', AuthorizationController]);


  function AuthorizationController (PartsAuthService) {
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
      PartsAuthService.postSignIn(email, password);
    }
  }
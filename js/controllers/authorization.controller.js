'use strict';

angular.module('broce')
  .controller('AuthorizationController', ['AuthService', AuthorizationController]);


  function AuthorizationController (AuthService) {
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
      AuthService.postSignUp(signupForm);
    }

    function postSignIn(email, password){
      AuthService.postSignIn(email, password);
    }
  }

'use strict';

angular.module('broce')
  .controller('AuthorizationController', ['AuthService', AuthorizationController]);


  function AuthorizationController (AuthService) {
    var vm = this;
    vm.title = 'Sign in here to order parts for your Broce Broom';
    // initially only show signin form, hide signup form - these are based on ng-show attributes
    vm.signinShow = true;
    vm.signupShow = false;
    // this functions control which form is showed and which is hidden
    vm.showSignup = showSignup;
    vm.showSignin = showSignin;
    // to submit each of these forms they both have functions too
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

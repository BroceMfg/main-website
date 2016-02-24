'use strict';

angular.module('broce')
  .service('PartsAuthService', PartsAuthService);

function PartsAuthService () {
  this.postSignUp = postSignUp;
  this.postSignIn = postSignIn;

  function postSignUp (formValues){
    // this should check for sanitation then
    // submit post request to express API
    console.log(formValues);
  }

  function postSignIn (email, pass){
    console.log(email, pass);
    // this should check for sanitation then
    // submit post request to express API

  }
}

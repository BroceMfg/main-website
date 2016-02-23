'use strict';

angular.module('broce')
  .service('PartsAuthService', PartsAuthService);

function PartsAuthService () {
  this.postSignUp = postSignUp;

  function postSignUp (formValues){
    console.log(formValues);
  }
}

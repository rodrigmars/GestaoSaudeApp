(function() {

  angular
    .module('app')
    .factory('PacienteSerivce', PacienteSerivce);

  PacienteSerivce.$inject = ['$http', '$cookies', '$rootScope', '$timeout'];

  function PacienteSerivce($http, $cookies, $rootScope, $timeout) {
    var service = {};

    return service;
  }


}());

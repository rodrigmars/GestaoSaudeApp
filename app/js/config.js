(function() {

  angular.module('app').constant('APP_SETTINGS', {
    "PATH_MONGODB": "\\"
  });

  angular.module('app').run(Init);

  Init.$inject = ['$rootScope', '$location'];

  function Init($rootScope, $location) {
    // $location.path('');
  }

})

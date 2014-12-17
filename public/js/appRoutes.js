// public/js/appRoutes.js
angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

  $routeProvider

  // home page
  .when('/', {
    templateUrl: 'views/quick.html',
    controller: 'MainController'
  })

  // Nums page that will use the NumsController
  .when('/nums', {
    templateUrl: 'views/nums.html',
    controller: 'NumsController'
  });

  $locationProvider.html5Mode(true);

}]);

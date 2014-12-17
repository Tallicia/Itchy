// public/js/controllers/NumsCtrl.js
angular.module('NumsCtrl', []).controller('NumsController', function($scope, $http) {

  $scope.tagline = 'Query Results!';
  $scope.num = 0;
  $scope.data = {};

  $scope.getResponse = function() {
    $http.get('/db').success(function(r) {
       $scope.data = r;
       $scope.num += 1;
    });
  };

});

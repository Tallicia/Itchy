// public/js/services/NumsService.js
angular.module('NumsService', []).factory('Nums', ['$http', function($http) {

  return {
    // call to get db
    get : function() {
      return $http.get('/db');
    }
  }

}]);

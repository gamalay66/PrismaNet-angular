(function () {
   'use strict';
   angular.module('prisma.controllers', []);

   function TopTwitterCtrl($scope, $http) {
     $http.get('data/topTwitter.json').success(function(data) {
       $scope.topTwitter = data;
     });
   }
   function TopFacebookCtrl($scope, $http) {
     $http.get('data/topFacebook.json').success(function(data) {
       $scope.topTwitter = data;
     });
   }
   function TopTrendCtrl($scope, $http) {
     $http.get('data/topTrend.json').success(function(data) {
       $scope.topTwitter = data;
     });
   }
   angular.module('prisma.controllers').controller('TopTwitterCtrl');
   angular.module('prisma.controllers').controller('TopFacebookCtrl');
   angular.module('prisma.controllers').controller('TopTrendCtrl');

})();

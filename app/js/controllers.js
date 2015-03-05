(function () {
   'use strict';
   angular.module('prisma.controllers', []);

   function TopTwitterCtrl($scope, $http) {
     $http.get('data/topTwitter.json').success(function(data) {
       $scope.topTwitter = data;
     });
     $http.get('data/topFacebook.json').success(function(data) {
       $scope.topFacebook = data;
     });
     $http.get('data/topTrend.json').success(function(data) {
       $scope.topTrend = data;
     });
   }
   function TopFacebookCtrl($scope, $http) {
     $http.get('data/topFacebook.json').success(function(data) {
       $scope.topFacebook = data;
     });
   }
   function TopTrendCtrl($scope, $http) {
     $http.get('data/topTrend.json').success(function(data) {
       $scope.topTrend = data;
     });

   }
   angular.module('prisma.controllers').controller('TopTwitterCtrl',TopTwitterCtrl);
   angular.module('prisma.controllers').controller('TopFacebookCtrl',TopFacebookCtrl);
   angular.module('prisma.controllers').controller('TopTrendCtrl',TopTrendCtrl);

})();

'use strict';

var app = angular.module('traveller', ['ngRoute', 'ui-notification']);

app.config(['$routeProvider', '$locationProvider', function($routeProvider,$locationProvider) {
  $routeProvider.when('/', {
    templateUrl: 'pages/home',
    controller: 'HomeCtrl'
  })
  .otherwise({
    redirectTo:'/'
  });
  $locationProvider.html5Mode({
    enabled: true,
    requireBase: false
  });
}]);
// app.config(function($interpolateProvider) {
//   $interpolateProvider.startSymbol('{[{');
//   $interpolateProvider.endSymbol('}]}');
// });
// Coustom Directive Start
// app.directive("matchVerify", function() {
//   return {
//     require: "ngModel",
//     scope: {
//       matchVerify: '='
//     },
//     link: function(scope, element, attrs, ctrl) {
//       scope.$watch(function() {
//         var combined;
//         if (scope.matchVerify || ctrl.$viewValue) {
//           combined = scope.matchVerify + '_' + ctrl.$viewValue; 
//         }                    
//         return combined;
//       }, function(value) {
//         if (value) {
//           ctrl.$parsers.unshift(function(viewValue) {
//             var origin = scope.matchVerify;
//             if (origin !== viewValue) {
//               ctrl.$setValidity("matchVerify", false);
//               return undefined;
//             } else {
//               ctrl.$setValidity("matchVerify", true);
//               return viewValue;
//             }
//           });
//         }
//       });
//     }
//   };
// });
// app.directive('autoActive', ['$location', function ($location) {
//   return {
//     restrict: 'A',
//     scope: false,
//     link: function (scope, element) {
//       function setActive() {
//         var path = $location.path();
//         if (path) {
//           angular.forEach(element.find('li'), function (li) {
//             var anchor = li.querySelector('a');
//             if (anchor.href.match('#' + path + '(?=\\?|$)')) {
//               angular.element(li).addClass('active');
//             } else {
//               angular.element(li).removeClass('active');
//             }
//           });
//         }
//       }
//       setActive();
//       scope.$on('$locationChangeSuccess', setActive);
//     }
//   }
// }]);
// Coustom Directive End
// Angular Notification Configuration Start
// app.config(function(NotificationProvider) {
//   NotificationProvider.setOptions({
//     delay: 10000,
//     right:10,
//     startTop: 20,
//     startRight: 10,
//     verticalSpacing: 20,
//     horizontalSpacing: 20,
//     positionX: 'center',
//     positionY: 'top'
//   });
// });
// Angular Notification Configuration End
// app.run(function (defaultErrorMessageResolver){
//   defaultErrorMessageResolver.getErrorMessages().then(function (errorMessages) {
//     errorMessages['companyName'] = "الرجاء ادخال اسم الشركة";
//     errorMessages['activityKind'] = "الرجاء ادخال نوع النشاط";
//   });
// });
app.controller('HomeCtrl', ['$scope', '$http', function($scope, $http) {
  $scope.formModel = {};
  $scope.onSubmit = function(){
    console.log("Hey i'm submitted");
    console.log($scope.formModel);
  }
}]);
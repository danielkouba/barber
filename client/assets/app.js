var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAnimate']);


myApp.config(function ( $routeProvider, $locationProvider, $mdThemingProvider){
  $locationProvider.hashPrefix('');
	// $httpProvider.interceptors.push(
	// function($q, $location){
	// 	return {
	// 		'responseError': function(rejection){
	// 			if (rejection.status == 401){
	// 				$location.url('/');
	// 			}
	// 			return $q.reject(rejection);
	// 		}
	// 	};
	// });


	var americanaBlueMap = $mdThemingProvider.extendPalette('blue', {
		'500': '#0F71FF'
	});
	var americanaRedMap = $mdThemingProvider.extendPalette('red', {
		'500': '#FF3A2C'
	});
	var americanaWhiteMap = $mdThemingProvider.extendPalette('amber', {
		'500': '#F5DA9F'
	});

	$mdThemingProvider.definePalette('barberBlue', americanaBlueMap);
	$mdThemingProvider.definePalette('barberRed', americanaRedMap);
	$mdThemingProvider.definePalette('barberWhite', americanaWhiteMap);

	$mdThemingProvider.theme('default')
		.primaryPalette('barberWhite')
		.accentPalette('barberBlue')
		.warnPalette('barberRed')

$routeProvider
.when('/',{
    templateUrl: 'assets/partials/main.html',
    controller: 'viewController', 
    controllerAs: 'VC'
})
.when('/barbers', {
    templateUrl: 'assets/partials/barbers.html',
    controller: 'viewController', 
    controllerAs: 'VC'
})
.when('/contact', {
    templateUrl: 'assets/partials/contact.html',
    controller: 'viewController', 
    controllerAs: 'VC'
})
.when('/services', {
	templateUrl: 'assets/partials/services.html',
	controller: 'viewController',	
	controllerAs: 'VC'
})
.when('/colors', {
	templateUrl: 'assets/partials/colors.html',
	controller: 'viewController',	
	controllerAs: 'VC'
})
.otherwise({
		redirectTo: '/'
	})
})
.controller('AppCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.toggleLeft = buildDelayedToggler('left');
    $scope.toggleRight = buildToggler('right');
    $scope.isOpenRight = function(){
      return $mdSidenav('right').isOpen();
    };

    /**
     * Supplies a function that will continue to operate until the
     * time is up.
     */
    function debounce(func, wait, context) {
      var timer;

      return function debounced() {
        var context = $scope,
            args = Array.prototype.slice.call(arguments);
        $timeout.cancel(timer);
        timer = $timeout(function() {
          timer = undefined;
          func.apply(context, args);
        }, wait || 10);
      };
    }

    /**
     * Build handler to open/close a SideNav; when animation finishes
     * report completion in console
     */
    function buildDelayedToggler(navID) {
      return debounce(function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      }, 200);
    }

    function buildToggler(navID) {
      return function() {
        // Component lookup should always be available since we are not using `ng-if`
        $mdSidenav(navID)
          .toggle()
          .then(function () {
            $log.debug("toggle " + navID + " is done");
          });
      };
    }
  })
  .controller('LeftCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('left').close()
        .then(function () {
          $log.debug("close LEFT is done");
        });

    };
  })
  .controller('RightCtrl', function ($scope, $timeout, $mdSidenav, $log) {
    $scope.close = function () {
      // Component lookup should always be available since we are not using `ng-if`
      $mdSidenav('right').close()
        .then(function () {
          $log.debug("close RIGHT is done");
        });
    };
  });
// .animation('.fade', function(){
// 	return {
// 		add: function(element, done){
// 			element.css('display', 'none');
// 			$(element).fadeIn(1000, function(){
// 				done()
// 			})
// 		},
// 		remove: function(element,done){
// 			element.css('display','block');
// 			$(element).fadeOut(1000, function(){
// 				done()
// 			})
// 		}
// 	}
// })
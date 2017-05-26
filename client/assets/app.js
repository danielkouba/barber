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
		.primaryPalette('barberBlue')
		.accentPalette('barberWhite')
		.warnPalette('barberRed')

$routeProvider
.when('/',{
    templateUrl: 'assets/partials/about.html',
    controller: 'viewController', 
    controllerAs: 'VC'
})
.when('/gallery', {
    templateUrl: 'assets/partials/gallery.html',
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
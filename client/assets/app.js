var myApp = angular.module('myApp', ['ngRoute', 'ngMaterial', 'ngAnimate']);


myApp.config(function ( $routeProvider, $locationProvider){
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
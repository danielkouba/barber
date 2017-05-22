myApp.controller('viewController', function($scope, $location, $mdDialog,viewFactory){


	  $scope.users = [
    {
      name: "About",
      content: {
      	type: "about",
      	data: "Welcome to Double Edge Studio located in the heart of Thousand Oaks, California. We specialize in traditional barbering services, ranging from hot towel shaves to classic/contemporary haircuts and styling – all in a comfortable and private atmosphere.  At Double Edge Studio, you’re not a number, you’re family. Always Tight…Always Right."
      }
    },
    {
      name: "Barbers",
      content: {
      	type: "barbers",
      	data: [
      		{name: "Neil Honbo",
          image: "barbershot-neil.jpg",
          title: "@double.edge.barbers"},
      		{name: "Cory Walters",
          image: "barbershot-cory.jpg",
          title: "@double.edge.barbers"},
      		{name: "Mike Stout",
          image: "barbershot-mike.jpg",
          title: "@double.edge.barbers"},
      		{name: "Connor O'Brien",
          image: "barbershot-connor.jpg",
          title: "@double.edge.barbers"}
      	]
      }

    },
    {
      name: "Contact",
      content: {
      	type: "contact",
      	data: {
      		phone:"818.292.2670", 
      		email:"coldxcut@gmail.com",
      		address: "3182 E. Thousand Oaks Blvd.",
      		city: "Thousand Oaks",
      		state:"CA",
      		zip: "91362",
      		hours:["closed", "10AM - 7PM", "10AM - 7PM", "10AM - 7PM", "10AM - 7PM", "10AM - 7PM", "9AM - 4PM"]
      	}
      }
    },
    {
      name: "Services",
      content: {
      	type: "services",
      	data: [
      		{name: "Haircut", price: "$35"},
      		{name: "Shave", price: "$40"},
      		{name: "Two Bits (Haircut & Shave)", price: "$70"},
      		{name: "Young Men’s Cut", price: "$25"},
      		{name: "Buzz", price: "$25"},
      		{name: "Beard Trim", price: "$15+"}

      	]
      }
    },
    {
      name: "Gallery",
      content:{
        images: ["red", "blue", "green"]
      }
    }
    ];
    
    
    $scope.selectedUserIndex = undefined;
    $scope.selectUserIndex = function (index) {
      if ($scope.selectedUserIndex !== index) {
        $scope.selectedUserIndex = index;
      }
      else {
        $scope.selectedUserIndex = undefined;
      }
    };



	$scope.currentNavItem = 'page1';

	$scope.goto = function(str){
		console.log(str)
		$scope.currentNavItem = str;
		$location.url("/"+str);
	}
	// Create a blank array to load users into.

	// $scope.users = [];
	// // Create a function that links to the factory
	// // The Factory links to 

	// function getUsers(){
	// 	userFactory.getusers(function(data){
	// 		$scope.users=data;
	// 	})
	// }	


	// // Load all users in

	// //getUsers();

	// //Add a User
	// //This takes data from the front end and passes it to the userFactory, The Factory passes it through '/users/create' route.
	// //The '/users/create' passes it to the backend controller.
	// //The backend Controller interacts with Mongoose and the Model to create a new entry in the Database

	// $scope.adduser = function(){
	// 	userFactory.createuser($scope.newUser, function(res){
	// 		if(res.data.hasOwnProperty('errors')){
	// 			$scope.regErrors = {};
	// 			$scope.regErrors = res.data.errors;
				
	// 		} else {
	// 			$scope.regErrors = {};
	// 			$scope.regMessage = {message: "Successfully Signed up. Please log in to continue"};
	// 			$scope.newUser = {};
	// 		}
	// 	})
	// };

	// $scope.loginuser = function(){
	// 	userFactory.loginuser($scope.user, function(res){
	// 		if(res.data.hasOwnProperty('errors')){
	// 			$scope.loginErrors = res.data.errors;
	// 			$location.path('/loginreg');
	// 		} else {
	// 			// $localStorage.user = res.data;
	// 			$scope.user = res.data
	// 			$scope.$storage.user = res.data;
	// 			$location.path('/');
	// 		}		
	// 	})
	// }


	// $scope.deleteuser = function(data){
	// 	userFactory.deleteuser(data, function(){
	// 		getUsers();
	// 	})
	// }
});
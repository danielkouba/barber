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
    
    $scope.barbers = [
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
        ];
    $scope.gallery =
     {path:"/src/images/gallery/",
      images: [
      {name: "10.JPG"},
      {name: "20.JPG"},
      {name: "30.JPG"},
      {name: "40.JPG"},
      {name: "50.JPG"},
      {name: "60.JPG"},
      {name: "70.JPG"},
      {name: "80.JPG"},
      {name: "90.JPG"}
    ]}
    $scope.services = [
          {name: "Haircut", price: "$35"},
          {name: "Shave", price: "$40"},
          {name: "Two Bits (Haircut & Shave)", price: "$70"},
          {name: "Young Men’s Cut", price: "$25"},
          {name: "Buzz", price: "$25"},
          {name: "Beard Trim", price: "$15+"}

        ]


    
    $scope.selectedUserIndex = undefined;
    $scope.currentNavItem = 'page1';



    $scope.selectUserIndex = function (index) {
      if ($scope.selectedUserIndex !== index) {
        $scope.selectedUserIndex = index;
      }
      else {
        $scope.selectedUserIndex = undefined;
      }
    };



	

	$scope.goto = function(str){
    if(str == 'booknow'){
      window.location.href = 'https://www.vagaro.com/doubleedgebarbershop/about';
    }else{
      console.log(str)
      $scope.currentNavItem = str;
      $location.url("/"+str);  
    }
	}

});
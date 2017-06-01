myApp.controller('viewController', function($scope, $location, $mdDialog,viewFactory){

	  $scope.users = [
    {
      name: "About",
      content: {
      	type: "about",
      	data: "Welcome to Double Edge Barbershop. We are a full-service shop located in the heart of Thousand Oaks, CA. Our team is anchored by four full-time licensed barbers and we have a passion for traditional barbering and for serving our community. We have high standards as do our guests. Stop in for a cut, hot towel shave or just hang out. At Double Edge you’re not a number, you’re family."
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
      		{name: "Michael Stout",
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
          title: "Owner / Barber",
          instagram: "@double.edge.barbers"},
          
          {name: "Cory Walters",
          image: "barbershot-cory.jpg",
          title: "Barber"},
          
          {name: "Mike Stout",
          image: "barbershot-mike.jpg",
          title: "Barber",
          instagram: "@itsjustahaircut"},

          {name: "Connor O'Brien",
          image: "barbershot-connor.jpg",
          title: "Barber"}
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
      {name: "65.JPG"},
      {name: "70.JPG"},
      {name: "75.JPG"},
      {name: "80.JPG"},
      {name: "90.JPG"},
      {name: "95.JPG"}
    ]}
    $scope.services = [
          {name: "Haircut", price: "$35"},
          {name: "Shave", price: "$40"},
          {name: "Two Bits (Haircut & Shave)", price: "$70"},
          {name: "Young Men’s Cut", price: "$25"},
          {name: "Buzz", price: "$25"},
          {name: "Beard Trim", price: "$15+"}

        ]
    $scope.background = {
      contact : "/src/images/bg-bw-contact.jpg",
      services : "/src/images/bg-bw-services.jpg",
      gallery : "/src/images/bg-bw-contact2.jpg",
      barbers : "/src/images/bg-bw-services2.jpg",
      about : "/src/images/bg-bw-about.jpg"
    }


    
    $scope.selectedUserIndex = undefined;
    $scope.currentNavItem = 'about';
    $scope.currentBackground = $scope.background[$scope.currentNavItem];



    $scope.selectUserIndex = function (index) {
      if ($scope.selectedUserIndex !== index) {
        $scope.selectedUserIndex = index;
      }
      else {
        $scope.selectedUserIndex = undefined;
      }
    };
	
  ////////////////////////////////////////
  //Constructors
  ////////////////////////////////////////
  $scope.servicesView = function(){
    $scope.currentBackground =  $scope.background["services"];
  }
  $scope.aboutView = function(){
    $scope.currentBackground =  $scope.background["about"];
  }
  $scope.barbersView = function(){
    $scope.currentBackground =  $scope.background["barbers"];
  }
  $scope.contactView = function(){
    $scope.currentBackground =  $scope.background["contact"];
  }
  $scope.galleryView = function(){
    $scope.currentBackground =  $scope.background["gallery"];
  }


	$scope.goto = function(str){
    if(str == 'booknow'){
      window.location.href = 'https://www.vagaro.com/doubleedgebarbershop';
    }else{
      console.log(str)
      $scope.currentNavItem = str;
      console.log($scope.currentBackground)
      $location.url("/"+str);  
    }
	}


  ////////////////////////////////////////
  //Gallery Code
  ////////////////////////////////////////
  $scope.showAdvanced = function(ev, index) {
    console.log(index)
    $mdDialog.show({
      locals:{dataToPass: index},
      controller: DialogController,
      templateUrl: './assets/partials/dialog.tmpl.html',
      parent: angular.element(document.body),
      targetEvent: ev,
      clickOutsideToClose:true
    })
    .then(function(answer) {
      $scope.status = 'You said the information was "' + answer + '".';
    }, function() {
      $scope.status = 'You cancelled the dialog.';
    });
  };

  function DialogController($scope, $mdDialog, dataToPass) {
    $scope.url = dataToPass;
    $scope.hide = function() {
      $mdDialog.hide();
    };

    $scope.cancel = function() {
      $mdDialog.cancel();
    };

    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
  }
// END Gallery Code
////////////////////////////////////////

// $stateProvider.state("home", {
//   views: {
//     "about": {
//       templateUrl:'assets/partials/about.html'
//     },
//     "barbers": {
//       templateUrl:'assets/partials/barbers.html' 
//     },
//     "contact": {
//       templateUrl:'assets/partials/contact.html' 
//     },
//     "services": {
//       templateUrl:'assets/partials/services.html' 
//     }

//   }
// })







});
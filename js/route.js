app.config(function ($routeProvider,$locationProvider){
  $locationProvider.hashPrefix('')
  $routeProvider
  .when("/home",{
    templateUrl:"index.html"
  })
  .when("/bitcoin",{
    templateUrl:"pages/bitcoin.html"
  })
  .otherwise({
    redirectTO:"/index.html"
  })
})

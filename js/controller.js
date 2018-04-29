app.controller("myCtrl",($scope,myFactory,$location,$route,$rootScope)=>{
var promise = myFactory.get();
promise.then(function (data){
  $scope.result = data;
  console.log($scope.result);
},function (err){
  $scope.result=  err;
});

$scope.showMe=true
$rootScope.$on('$locationChangeSuccess', function() {
       $rootScope.actualLocation = $location.path();
   });

  $rootScope.$watch(function () {return $location.path()}, function (newLocation, oldLocation) {
       if($rootScope.actualLocation === newLocation) {
           $scope.change()
       }
   });

$scope.change=()=>{
  $scope.showMe=!$scope.showMe
}

});

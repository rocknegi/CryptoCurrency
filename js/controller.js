app.controller("myCtrl",($scope,myFactory)=>{
var promise = myFactory.get();
promise.then(function (data){
  $scope.result = data;
  console.log($scope.result);
},function (err){
  $scope.result=  err;
});
$scope.showMe=true
$scope.change=()=>{
  $scope.showMe=!$scope.showMe
}

});

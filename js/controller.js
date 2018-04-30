app.controller("myCtrl", ($scope, myFactory, $location, $route, $rootScope, $timeout) => {
  $scope.reload = () => {
    var promise = myFactory.get();
    promise.then(function(data) {
      $scope.result = data;
      console.log($scope.result);
    }, function(err) {
      $scope.result = err;
    });
    $timeout(function() {
      $scope.reload();
    }, 50000)
  }



  $scope.showMe = true
  $rootScope.$on('$locationChangeSuccess', function() {
    $rootScope.actualLocation = $location.path();
  });

  $rootScope.$watch(function() {
    return $location.path()
  }, function(newLocation, oldLocation) {
    if ($rootScope.actualLocation === newLocation) {
      $scope.change()
    }
  });

  $scope.check = (x) => {
    if ($scope.result[x].percent_change_24h > 0) {
      console.log("gg")
      return $scope.above = true;
    } else {
      console.log("ggrip")
      return $scope.below = true

    }
  }

  $scope.change = (x) => {
    $scope.showMe = !$scope.showMe

    $scope.check(x);
  }
  $scope.reload();
});

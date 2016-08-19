app.controller('notificationsCtrl', function($scope, $http) {
    $http.get("api/notification.json").then(function(response) {
      $scope.notifications = response.data;
    });
    
});
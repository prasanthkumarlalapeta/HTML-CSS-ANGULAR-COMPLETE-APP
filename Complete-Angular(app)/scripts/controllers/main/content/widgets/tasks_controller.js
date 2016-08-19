app.controller('tasksCtrl', function($scope, taskService) {
    taskService.getAllTasks().success(function(response) {
    	$scope.progressbars = response;
    });    

});


app.factory('taskService', function($http) {
    return {
        getAllTasks: function() {
            var url = "api/tasks.json";
            return $http.get(url);
        }
    };
});
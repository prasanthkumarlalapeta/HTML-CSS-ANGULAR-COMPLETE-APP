app.controller('alertsCtrl', function($scope) {
    $scope.alerts = [
      {alertname: "warning", message: "This is warning message.. Please close it for further usage."},
      {alertname: "success", message: "You successfully read this is important message."},
      {alertname: "info", message: "Alert three"},
      {alertname: "error", message: "Alert four"},
    ];
});
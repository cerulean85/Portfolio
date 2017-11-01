var app = angular.module('container', []);

app.controller('MenuCtrl', function($scope) {

    $scope.details = [
        { "name": "Employees111" },
        { "name": "Support111" }
    ];
    $scope.details.name = [
        { "prof": "enginerr111" },
        { "prof": "doctor111" }
    ];
});

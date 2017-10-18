var app = angular.module('container', []);

app.controller('MenuCtrl', function($scope) {

    $scope.details = [
        { "name": "Employees" },
        { "name": "Support" }
    ];
    $scope.details.name = [
        { "prof": "enginerr" },
        { "prof": "doctor" }
    ];
});

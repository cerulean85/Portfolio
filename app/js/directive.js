angular.module('menu', [])
    .controller('MenuCtrl', function($scope, $http) {
        $scope.test = function() {
            console.log('qwqwqw');
            $scope.result = $http.get('test');
        };
        $scope.details = [
            { "name": "Employees" },
            { "name": "Support" }
        ];
        $scope.details.name = [
            { "prof": "enginerr" },
            { "prof": "doctor" }
        ];
    })
    .directive('menuDirective', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/menu-directive.html'
            // template: '<div>하하하하</div></div>'
        };
    });

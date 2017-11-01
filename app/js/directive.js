angular.module('component', [])
    .controller('ComponentCtrl', function($scope, $http) {

        $scope.init = function () {
            $scope.visible = new Object();
            $scope.hashMainMenu = [];
            $scope.hashSubMenu = [];

            $http.get('getMenu').then(function(res) {
                if (res.data[0] == undefined)
                    console.log("no data");
                else {
                    console.log(res);
                }
                $scope.menu = res.data;
                for(var i=0; i<$scope.menu.length; i++) {
                    var id = $scope.menu[i].id;
                    $scope.hashMainMenu[id] = $scope.menu[i].alias;
                    $scope.hashSubMenu[id] = $scope.menu[i].alias;
                    $scope.visible[$scope.menu[i].alias] = i==0? true : false;
                }

            });

            // $http.get('getTestingWithParams', { params: params }).then(function(res) {
        };
    })
    .directive('menuDirective', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/menu-directive.html',
            controller: function($scope, $http) {

                $scope.loadMainMenu = function(id) {

                    Object.keys($scope.hashMainMenu).forEach(function (key) {
                        if(key == id) $scope.visible[$scope.hashMainMenu[id]] = true;
                        else $scope.visible[$scope.hashMainMenu[id]] = false;
                    });

                    var name = $scope.hashMainMenu[id];
                    Object.keys($scope.visible).forEach(function (key) {
                        if(key == name) $scope.visible[key] = true;
                        else $scope.visible[key] = false;
                    });
                    comebackToTop();
                }

                $scope.loadSubMenu = function(parentId, id) {
                    if($scope.hashSubMenu[id] == undefined)
                        $scope.hashSubMenu[id] = '어쩌고저쩌고';
                    comebackToTop();
                }
            }
        };
    })

    .directive('profileDirective', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/profile-directive.html',
            scope: { visible: '=visible' },
            controller: function($scope, $http) {

                $scope.init = function () {

                }
            },
            link: function(scope, element, attrs, controller) {

                scope.$watch('visible', function(newValue, oldValue) {
                    if(newValue == true) {
                        element.css('display', 'inline');
                        element.css('height', '100');
                        scope.height = 100;
                        enabledSlide(true);
                    }
                    else {
                        element.css('display', 'none')
                        element.css('height', '0');
                        scope.height = 0;
                        enabledSlide(false);
                    }
                })
            }
        };
    })
    .directive('developmentDirective', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/development-directive.html',
            scope: { visible: '=visible' },
            controller: function($scope, $http) {

            },
            link: function(scope, element, attrs, controller) {

                scope.$watch('visible', function(newValue, oldValue) {
                    if(newValue == true) {
                        element.css('visibility', 'visible');
                        element.css('height', '100');
                        scope.height = 100;
                    }
                    else {
                        element.css('visibility', 'collapse');
                        element.css('height', '0');
                        scope.height = 0;
                    }
                })
            }
        };
    })
    .directive('developmentSubDirective', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/development-sub-directive.html',
            scope: { visible: '=visible' },
            controller: function($scope, $http) {

            },
            link: function(scope, element, attrs, controller) {

                scope.$watch('visible', function(newValue, oldValue) {
                    if(newValue == true) {
                        element.css('visibility', 'visible');
                        element.css('height', '100');
                        scope.height = 100;
                    }
                    else {
                        element.css('visibility', 'collapse');
                        element.css('height', '0');
                        scope.height = 0;
                    }
                })
            }
        };
    })
    .directive('visionDirective', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/vision-directive.html',
            scope: { visible: '=visible' },
            controller: function($scope, $http) {

            },
            link: function(scope, element, attrs, controller) {

                scope.$watch('visible', function(newValue, oldValue) {
                    if(newValue == true) {
                        element.css('visibility', 'visible');
                        element.css('height', '100');
                        scope.height = 100;
                    }
                    else {
                        element.css('visibility', 'collapse');
                        element.css('height', '0');
                        scope.height = 0;
                    }
                })
            }
        };
    })
    .directive('unlabeledDirective', function() {
        return {
            restrict: 'E',
            templateUrl: 'partials/unlabeled-directive.html',
            scope: { visible: '=visible' },
            controller: function($scope, $http) {

            },
            link: function(scope, element, attrs, controller) {

                scope.$watch('visible', function(newValue, oldValue) {
                    if(newValue == true) {
                        element.css('visibility', 'visible');
                        element.css('height', '100');
                        scope.height = 100;
                    }
                    else {
                        element.css('visibility', 'collapse');
                        element.css('height', '0');
                        scope.height = 0;
                    }
                })
            }
        };
    })
angular.module('content', [])



// var app = angular.module('myApp', []);
//
// app.controller('Controller0', function($scope,sharedService) {
//     $scope.sharedService = sharedService;
//
//     $scope.handleClick = function() {
//         //if you really want ...
//         sharedService.sharingMessage = sharedService.messageToShare;
//     };
// });
//
// app.controller('Controller1', function($scope,sharedService) {
//     $scope.sharedService = sharedService;
// });
//
// app.controller('Controller2', function($scope,sharedService) {
//     $scope.sharedService = sharedService;
// });
//
// app.factory('sharedService', function() {
//     var shared = {};
//     shared.messageToShare = '';
//     shared.sharingMessage = '';
//
//     return shared;
// });
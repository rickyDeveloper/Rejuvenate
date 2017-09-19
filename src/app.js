/**
 * Created by vikasnaiyar on 10/09/16.
 */
var myApp = angular.module('myApp',['ngRoute','ngAnimate', 'ui.router']);



/**
 * Created by vikasnaiyar on 10/09/16.
 */
var myApp = angular.module('myApp',['ngRoute','ngAnimate', 'ui.router', 'ngStorage','lr.upload']);



myApp.directive('fileModel', ['$parse', function ($parse) {
    return {
        restrict: 'A',
        link: function(scope, element, attrs) {
            var model = $parse(attrs.fileModel);
            var modelSetter = model.assign;

            element.bind('change', function(){
                scope.$apply(function(){
                    modelSetter(scope, element[0].files[0]);
                });
            });
        }
    };
}]);

myApp.service('fileUpload', ['$http', function ($http) {
    this.uploadFileToUrl = function(file, uploadUrl) {
        var fd = new FormData();
        fd.append('file', file);
        $http.post(uploadUrl, fd, {
                transformRequest: angular.identity,
                headers: {'Content-Type': undefined}
            })
            .success(function () {
            })
            .error(function () {
            });
    }
}]);

/*myApp.config(['$routeProvider','$stateProvider', '$urlRouterProvider',
    function($routeProvider, $stateProvider, $urlRouterProvider) {
        $routeProvider.
        when('/', {
            controller: 'MainController',
            templateUrl: 'src/component/main/main.html'
        }).
        when('/login', {
            controller: 'LoginController',
            templateUrl: 'src/component/login/login.html'
        }).
        when('/home', {
            controller: 'HomeController',
            templateUrl: 'src/component/home/home.html'
        }).
        otherwise({
            redirectTo: '/'
        });

        $stateProvider

        // route to show our basic form (/form)
            .state('home', {
               url: '/home',
               templateUrl: 'src/component/home/home.html',
                controller: 'HomeController',
                //url: '/profile',
                //templateUrl: 'src/component/home/personal.html'
            })

            // nested states
            // each of these sections will have their own view
            // url will be nested (/form/profile)
            .state('home.personal', {
                url: '/profile',
                templateUrl: 'src/component/home/personal.html'
            })

            // url will be /form/interests
            .state('home.interests', {
                url: '/interests',
                templateUrl: 'src/component/home/interests.html'
            })

            // url will be /form/payment
            .state('home.payment', {
                url: '/payment',
                templateUrl: 'src/component/home/payment.html'
            });
        // catch all route
        // send users to the form page
        $urlRouterProvider.otherwise('/home/personal');
    }]
);*/

myApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            controller: 'MainController',
            templateUrl: 'src/component/main/main.html'
        }).
        when('/login', {
            controller: 'LoginController',
            templateUrl: 'src/component/login/login.html'
        }).
        when('/home', {
                controller: 'HomeController',
                templateUrl: 'src/component/home/home.html'
        }).
        when('/results', {
            controller: 'ResultsController',
            templateUrl: 'src/component/home/results.html'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]
);


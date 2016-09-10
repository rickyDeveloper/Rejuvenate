/**
 * Created by vikasnaiyar on 10/09/16.
 */
var myApp = angular.module('myApp',['ngRoute','ngAnimate', 'ui.router']);



/**
 * Created by vikasnaiyar on 10/09/16.
 */
var myApp = angular.module('myApp',['ngRoute','ngAnimate', 'ui.router']);

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
        otherwise({
            redirectTo: '/'
        });
    }]
);


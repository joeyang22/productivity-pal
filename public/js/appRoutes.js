angular.module('appRoutes', []).config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'MainController'
        })

        // nerds page that will use the NerdController
        .when('/user', {
            templateUrl: 'views/user.html',
            controller: 'UserController'
        })

        .when('/task',{
          templateUrl: 'view/task.html',
          controller: 'TaskController'
        });

    $locationProvider.html5Mode(true);

}]);

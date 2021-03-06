angular.module('UserService', []).factory('User', ['$http', function($http) {

    return {
        // call to get all nerds
        get : function() {
            return $http.get('/api/user');
        },


                // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new user
        create : function(userData) {
            return $http.post('/api/user', userData);
        },

        // call to DELETE a user
        delete : function(id) {
            return $http.delete('/api/user/' + id);
        }
    }       

}]);
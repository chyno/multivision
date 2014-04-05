angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http) {
    $scope.signin = function(username, password) {
        
         $http.post('/login', { username: username, password: password }).then(function(response) {
            console.log('button post');
            if (response.data.sucesss) {
                console.log('logged in!');
            } else {
               console.log('failed to log in');
            }
        });
    };
});
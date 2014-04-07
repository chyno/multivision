angular.module('app').controller('mvNavBarLoginCtrl', function($scope, $http, mvIdentity, mvNotifier) {
    $scope.identity = mvIdentity;
    $scope.signin = function(username, password) {
          console.log('select button');
         $http.post('/login', { username: username, password: password }).then(function(response) {
            console.log('button post');
            if (response.data.success) {
                mvIdentity.currentUser = response.data.user;
                mvNotifier.notify('You are signed in!');
            } else {
               mvNotifier.notify('Username/Password combination incorrect');
            }
        });
    };
});
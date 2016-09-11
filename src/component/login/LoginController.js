/**
 * Created by vikasnaiyar on 10/09/16.
 */

myApp.controller('LoginController',  function($scope) {

        //this.correctUserName='sequoia'

        this.login = function() {
            /* if($scope.username != 'sequoia') {
                 $scope.error = "Invalid user credentials";
             } else {*/
                 location.href = '#/home';
             //}
        }


    }
);

/**
 * Created by vikasnaiyar on 11/09/16.
 */

// =============================================================================
myApp.controller('ResultsController', function($scope,  SharedDataService) {


    $scope.data = SharedDataService


    alert($scope.data['videos'][0]['url']);
});

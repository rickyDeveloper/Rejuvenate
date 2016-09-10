/**
 * Created by vikasnaiyar on 10/09/16.
 */

mainApp.service('HomeService', function(){
    this.square = function(a) {
        return MathService.multiply(a,a);
    }
});

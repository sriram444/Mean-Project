/**
 * Created by srda1 on 14-07-2017.
 */
app.controller('patienthomectrl',function($scope,$rootScope,$location){
    $scope.pat = $rootScope.pt;
 // $scope.drlist = function(){
   //   var url = "http://localhost:4000/pthome1";

      console.log(JSON.stringify($scope.pat))
 // }


});

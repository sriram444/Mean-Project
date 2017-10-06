/**
 * Created by srda1 on 10-07-2017.
 */
app.controller("adminloginctrl",function ($scope,$http,$location) {
   $scope.adminlogin = function () {
       var url = "http://localhost:4000/adminlogin?ausername="+$scope.auname+"&apwd="+$scope.apwd;

      // var url = "http://localhost:4000/adminlogin?adminUsername="+$scope.auname+"&adminPassword="+$scope.apwd;
         $http.get(url)
             .then(function(response){
                alert(response.data);
                if(response.data=="valid"){
                    $location.path('/home')
                }
                else{
                    $scope.auname = "";
                    $scope.apwd = "";
                }

             })
   }
});
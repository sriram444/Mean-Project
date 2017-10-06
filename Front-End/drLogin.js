/**
 * Created by srda1 on 10-07-2017.
 */
app.controller("drloginctrl",function ($scope,$http,$location,$rootScope) {
    $scope.drlogin = function () {
        var url = "http://localhost:4000/doctorlogin?drloginUsername="+$scope.duname+"&drloginPassword="+$scope.dpwd;
        $http.get(url)
            .then(function(response){
                //console.log(response);
                //alert(response.data.dusername);
                if((response.data.dusername)==$scope.duname){
                    $rootScope.dr = response.data;
                    $location.path('/drhome')
                }
                else{
                    $scope.duname="";
                    $scope.dpwd="";
                    alert("not successfull")

                }
            })
    }
});
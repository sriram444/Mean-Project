/**
 * Created by srda1 on 10-07-2017.
 */
app.controller("ptloginctrl",function ($scope,$http,$location,$rootScope) {
    $scope.ptlogin = function () {
        var url = "http://localhost:4000/patientlogin?ptloginUsername="+$scope.puname+"&ptloginPassword="+$scope.ppwd;
        $http.get(url)
            .then(function(response){
                //console.log(response)
                //alert(response.data);

                if((response.data.ptusername)==$scope.puname){
                    $rootScope.pt = response.data;
                    $location.path('/pthome')
                }
                else{
                    alert("not successfull")
                    $scope.puname="";
                    $scope.ppwd=""
                }
            })
    }
});
/**
 * Created by srda1 on 10-07-2017.
 */
app.controller("ptregistrationctrl",function ($scope,$http,$location) {
    $scope.ptregistration = function () {
        var url = "http://localhost:4000/patientregistration";
        $http.post(url,$scope.patient)
            .then(function(response){
                //console.log(response)
                alert(response.data)
                if(response.data=="patient inserted"){
                    $location.path('/patientlogin')
                }else {
                    $scope.patient.ptusername = ""
                }
            })
    }
});
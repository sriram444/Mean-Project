/**
 * Created by srda1 on 10-07-2017.
 */
app.controller("drregistrationctrl",function ($scope,$http,$location) {
    $scope.drregistration = function () {
        var url = "http://localhost:4000/doctorregistration";
        $http.post(url,$scope.doctor)
            .then(function(response){
                //console.log(response)
                alert(response.data);

                if(response.data=="doctor inserted"){
                    $location.path('/doctorlogin')
                }else {
                    $scope.doctor.dusername = ""
                }
            })
    }
});
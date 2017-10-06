/**
 * Created by srda1 on 12-07-2017.
 */
app.controller('adminhomectrl',function($scope,$http){
    $scope.patientdetails = function(){
        var url = "http://localhost:4000/home1";
        $http.get(url)
            .then(function(response){
                $scope.user = response.data
            })
    },

    $scope.doctordetails = function(){
        var url = "http://localhost:4000/home2";
        $http.get(url)
            .then(function(response){
                $scope.user1 = response.data
            })
    }
});
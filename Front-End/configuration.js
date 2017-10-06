/**
 * Created by srda1 on 10-07-2017.
 */
app.config(function($routeProvider){
    $routeProvider
        .when('/adminlogin',{
            templateUrl:"./adminLogin.html",
            controller :"adminloginctrl"

        })

        .when('/doctorlogin',{
            templateUrl:"./drLogin.html",
            controller :"drloginctrl"

        })

        .when('/doctorregistration',{
            templateUrl:"./drRegistration.html",
            controller :"drregistrationctrl"

        })

        .when('/patientlogin',{
            templateUrl:"./patientLogin.html",
            controller :"ptloginctrl"

        })

        .when('/patientregistration',{
            templateUrl:"./patientRegistration.html",
            controller :"ptregistrationctrl"

        })

        .when('/home',{
            templateUrl:"./adminHome.html",
            controller:"adminhomectrl"
        })

        .when('/drhome',{
            templateUrl:"./docorHome.html",
            controller:"doctorhomectrl"
        })

        .when('/pthome',{
            templateUrl:"./patientHome.html",
            controller:"patienthomectrl"
        })
});
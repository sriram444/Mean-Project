
var express=require("express");
var app=express();

const util = require('util')

var bodyParser = require('body-parser')
app.listen(4000)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:63342');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});


app.get("/adminlogin",function(req,res){
	console.log("In admin login page")
 console.log(req.query.adminUsername)
 console.log(req.query.adminPassword)
 res.send("admin login details recieved")

})

app.get("/doctorlogin",function(req,res){
	console.log("In doctor login page")
 console.log(req.query.drloginUsername)
 console.log(req.query.drloginPassword)
 res.send("doctor login details recieved")

})

app.get("/doctorregistration",function(req,res){
console.log("In doctor registration page")
console.log(req.query.drregUsername)
 console.log(req.query.drregPassword)
 console.log(req.query.drfullname)
 console.log(req.query.drspecialization)
 console.log(req.query.drage)
 console.log(req.query.drgender)

 res.send("doctor registration details recieved")

})

app.get("/patientlogin",function(req,res){
	console.log("In patient login page")
 console.log(req.query.ptloginUsername)
 console.log(req.query.ptloginPassword)
 res.send("patient login details recieved")

})

app.get("/patientregistration",function(req,res){
	console.log("In doctor registration page")
 console.log(req.query.ptregUsername)
 console.log(req.query.ptregPassword)
 console.log(req.query.ptfullname)
 console.log(req.query.ptage)
 console.log(req.query.ptgender)
 res.send("doctor registration details recieved")

})
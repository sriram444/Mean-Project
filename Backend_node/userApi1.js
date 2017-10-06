
var express=require("express");
var app=express();

var MongoClient = require('mongodb').MongoClient
 
// Connection URL
var mongoURL = 'mongodb://localhost:27017/admin'
//var url = 'mongodb://localhost:27017/myproject';

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

//this is admin login get method
app.get("/adminlogin",function(req,res){
	console.log("In admin login page")
	
	//MongoClient.connect(mongoURL, function(err, db) {
  // console.log("Connected correctly to server");
//var dataBase=db.db("hospital")
//var coll=dataBase.collection("admincredentials")
//coll.find().toArray(function(err,docs){
//console.log(docs)
//db.close();
//})
//  
//});
	
 console.log(req.query.adminUsername)
 console.log(req.query.adminPassword)
 res.send("admin login details recieved")

})

//this is doctor login get method
app.get("/doctorlogin",function(req,res){
	console.log("In doctor login page")
 console.log(req.query.drloginUsername)
 console.log(req.query.drloginPassword)
 res.send("doctor login details recieved")

})

//this is doctor registration get method
app.get("/doctorregistration",function(req,res){
console.log("In doctor registration page")
console.log(req.query.drregUsername)
 console.log(req.query.drregPassword)
 console.log(req.query.drfullname)
 console.log(req.query.drspecialization)
 console.log(req.query.drage)
 console.log(req.query.drgender)
 
 MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to server");
var dataBase=db.db("hospital")
var coll=dataBase.collection("drregistration")
//coll.find().toArray(function(err,docs){
//console.log(docs)
//db.close();
 var insertObj={"username":req.query.drregUsername,"password":req.query.drregPassword,"fullname":req.query.drfullname,"specialization":req.query.drspecialization,"age":req.query.drage,"gender":req.query.drgender}
 coll.insert(insertObj,function(err,res){
	 if(err)
		 console.log(err)
		 db.close();
	 console.log(res)

})
//  
});

 res.send("doctor registration details recieved")

})

//this is patient login get method
app.get("/patientlogin",function(req,res){
	console.log("In patient login page")
 console.log(req.query.ptloginUsername)
 console.log(req.query.ptloginPassword)
 res.send("patient login details recieved")

})

//this is patient registration get method
app.get("/patientregistration",function(req,res){
	console.log("In patient registration page")
 console.log(req.query.ptregUsername)
 console.log(req.query.ptregPassword)
 console.log(req.query.ptfullname)
 console.log(req.query.ptage)
 console.log(req.query.ptgender)
 
  MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to server");
var dataBase=db.db("hospital")
var coll=dataBase.collection("ptregistration")
//coll.find().toArray(function(err,docs){
//console.log(docs)
//db.close();
 var insertObj={"ptusername":req.query.ptregUsername,"ptpassword":req.query.ptregPassword,"ptfullname":req.query.ptfullname,"ptage":req.query.ptage,"ptgender":req.query.ptgender}
 coll.insert(insertObj,function(err,res){
	 if(err)
		 console.log(err)
		 db.close();
	 console.log(res)

})
});
 
 res.send("doctor registration details recieved")

})

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
app.use(bodyParser.json())
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

//admin login
app.get("/adminlogin",function(req,res){
	console.log("In admin login page")
 //console.log(req.query.adminUsername)
 //console.log(req.query.adminPassword)
 //res.send("admin login details recieved")
 
	if(req.query.ausername=='admin' && req.query.apwd=='admin'){
		res.send("valid")
	}
	else{
		res.send("invalid")
	}

})

//doctor login
app.get("/doctorlogin",function(req,res){
	console.log("In doctor login page")
 console.log(req.query.drloginUsername)
 console.log(req.query.drloginPassword)
 
 MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to database");
var dataBase=db.db("hospital")
var coll=dataBase.collection("drregistration")
coll.findOne({"dusername":req.query.drloginUsername, "duserpwd":req.query.drloginPassword},function(err,doc){
	if(doc){
		res.send(doc);
		console.log(doc);
	}
	else if(err){
		res.send("doctor login unsuccessful");
		console.log("doctor login unsuccessful");
	}
	else{
		res.send("wrong credentials");
		console.log("wrong credentials");
	}
})
 
 })

})

//doctor registration
app.post("/doctorregistration",function(req,res){
var obj = req.body
//console.log(obj)


MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to database");
var dataBase=db.db("hospital")
var coll=dataBase.collection("drregistration")

coll.findOne({"dusername":obj.dusername},function(err,doc){
	if(doc){
		res.send("username already exists, please try with another one");
		console.log("username already exists, please try with another one");
	}
	else{
		coll.insert(obj,function(inerr,indoc){
			if(indoc){
				res.send("doctor inserted");
				console.log("doctor details successfully inserted");
			}
		})
	}
})
 
//  
});
 
})

//patient login
app.get("/patientlogin",function(req,res){
	console.log("In patient login page")
 var ptusernam = req.query.ptloginUsername;
 var ptpwd = req.query.ptloginPassword;
 
 MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to database");
var dataBase=db.db("hospital")
var coll=dataBase.collection("ptregistration")
coll.findOne({"ptusername":req.query.ptloginUsername, "ptuserpwd":req.query.ptloginPassword},function(err,doc){
	if(doc){
		res.send(doc);
		console.log("patient login successful");
	}
	else if(err){
		res.send("patient login unsuccessful");
		console.log("doctor login unsuccessful");
	}
	else{
		res.send("wrong credentials");
		console.log("wrong credentials");
	}
})
 
 })

})

//patient registration
app.post("/patientregistration",function(req,res){
	var obj1 = req.body
//console.log(obj1)
MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to server");
var dataBase=db.db("hospital")
var coll=dataBase.collection("ptregistration")

coll.findOne({"ptusername":obj1.ptusername},function(err,doc){
	if(doc){
		res.send("username already exists, please try with another one");
		console.log("username already exists, please try with another one")
	}
	else{
		coll.insert(obj1,function(inerr,indoc){
			if(indoc){
				res.send("patient inserted");
				console.log("patient inserted")
			}
		})
	}
})
 
//  
});

})

app.get('/home1',function(req,res){
MongoClient.connect(mongoURL, function(err, db) {
 console.log("Connected correctly to server");
var dataBase=db.db("hospital")
var coll=dataBase.collection("ptregistration")
coll.find().toArray(function(err,docs){
//console.log(docs)
res.send(docs)
db.close();
})
//  
});
	
})



app.get('/home2',function(req,res){
MongoClient.connect(mongoURL, function(err, db) {
 console.log("Connected correctly to server");
var dataBase=db.db("hospital")
var coll=dataBase.collection("drregistration")
coll.find().toArray(function(err,docs){
//console.log(docs)
res.send(docs)
db.close();
})
//  
});
	
})




var MongoClient = require('mongodb').MongoClient
 
// Connection URL
var mongoURL = 'mongodb://admin:admin@localhost:27017/admin'
//var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to server");
var dataBase=db.db("sample")
var coll=dataBase.collection("indriyn")

 var insertObj={"name":"Ramudtrdtr",location:"hyd",age:26}
 coll.insert(insertObj,function(err,res){
	 if(err)
		 console.log(err)
		 db.close();
	 console.log(res)
 })
 
//  
});
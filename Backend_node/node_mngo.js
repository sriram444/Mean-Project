var MongoClient = require('mongodb').MongoClient
 
// Connection URL
var mongoURL = 'mongodb://localhost:27017/admin'
//var url = 'mongodb://localhost:27017/myproject';
// Use connect method to connect to the Server
MongoClient.connect(mongoURL, function(err, db) {
   console.log("Connected correctly to server");
var dataBase=db.db("hospital")
var coll=dataBase.collection("ptregistration")
coll.find().toArray(function(err,docs){
console.log(docs)
db.close();
})
//  
});
// const functions = require('firebase-functions');
// const express=require('express')

// const app=express();
// app.get('/timestamp',(req,res)=>{
//     res.send('test');
// })
// exports.app = functions.https.onRequest(app);
var express = require('express');  
var path = require("path");   
var bodyParser = require('body-parser');  
var mongo = require("mongoose");  
  
var db = mongo.connect("mongodb+srv://test:Postpaid123@cluster0.mp6gp.mongodb.net/IndianMovies?retryWrites=true&w=majority", function(err, response){  
   if(err){ console.log( err); }  
   else{ console.log('Connected to ' + db, ' + ', response); }  
});  
  
  
var app = express()  
app.use(bodyParser());  
app.use(bodyParser.json({limit:'5mb'}));   
app.use(bodyParser.urlencoded({extended:true}));  
   
  
app.use(function (req, res, next) {        
     res.setHeader('Access-Control-Allow-Origin', 'https://nodejsmongo-movietracker.firebaseapp.com/');    
     res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
     res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');      
     res.setHeader('Access-Control-Allow-Credentials', true);       
     next();  
 });  
  
 var Schema = mongo.Schema;  
  
// var UsersSchema = new Schema({      
//  firstName: { type: String },       
//  lastName: { type: String },
//  email: { type: String },
//  phoneNo: { type: String },

// },{ versionKey: false });  
  
var UsersSchema = new Schema({      
 Industry: { type: String },       
 Actor: { type: String },
 Year: { type: String },
 Title: { type: String },
 Role: { type: String },
 Director: { type: String },
 Language: { type: String },
},{ versionKey: false });  
  
var model = mongo.model('IndianMovies', UsersSchema, 'IndianMovies');  
  
 app.get("/api/getMovies",function(req,res){  
    model.find({},function(err,data){  
              if(err){  
                  res.send(err);  
              }  
              else{                
                  res.send(data);  
                  }  
          });  
  })  
  
  
app.listen(8080, function () {  
    
 console.log('Example app listening on port 8080!')  
})  
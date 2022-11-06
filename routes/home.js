const express=require('express')
const path =require('path')
var session = require('express-session');

var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin123@cluster0.sq531ap.mongodb.net/UserDataBase";
const app=express.Router();

app.get('/',(req,res,next)=>{
    
    // res.render("home")
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("UserDataBase")
        var query = {};
        dbo.collection("AdminDataBase").find(query).toArray(function(err, result) {
          if (err) throw err;

        //   console.log(result);
          if (result.length>0)
          {
            
        //    console.log("inside result.length")  
            
          res.render("home",{username:result});
          }
          db.close();
        });
    })
app.post('/verify',(req,res,next)=>{

})

})
module.exports= app;
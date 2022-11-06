const express=require('express')
const path =require('path')
// var session = require("express-session");
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://admin:admin123@cluster0.sq531ap.mongodb.net/UserDataBase";
const app=express.Router();
const fs = require("fs");

app.use('/verify',(req,res,next)=>{
    
//     res.render("verify",)

// })
// module.exports= app;

MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("UserDataBase")
    var query = {};
    dbo.collection("VerificationOP").find(query).toArray(function(err, result) {
      if (err) throw err;

    //   console.log(result[4].PlaceId);
      if (result.length>0)
      {
        
      res.render("verify",{username:result});
    //   const base64 = fs.readFileSync("path-to-image.jpg", "base64");
    //     const buffer = Buffer.from(username[11].img64, "base64");
    //     fs.writeFileSync("new-path.jpg", buffer);
      

      }
      db.close();
    });
})
})
module.exports= app;
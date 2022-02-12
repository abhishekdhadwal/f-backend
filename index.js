

 const express = require("express");
 const app = express();
 const mongoose = require("mongoose");
 mongoose.connect('mongodb://localhost:27017/myDB',{useNewUrlParser: true},(err)=>{
   if(!err) console.log("db connected");
    else console.log("db error");
 })
 const NewSchema = new mongoose.Schema({
    name:String,
    age:Number
 });

 const newModel = new mongoose.model("collection", NewSchema);

//  const data = new newModel({name:'messy',age:30 });
//  data.save();

const data = async()=>{
  const result = await newModel.insertMany([{name:'rushi', age:24},{name:'patil',age:25}]);
  console.log(result);
};
data();

app.use("/admin" , require("./routes/admin"));


 app.listen(8081,() =>{
   console.log("server started")
 });

// var express = require('express');
// var app = express();
// var fs = require("fs");
// var bodyParser = require('body-parser');
// const { Console } = require('console');
// var jsonParser = bodyParser.json();


// app.use((req, res, next) =>
// {
//     res.header("Access-Control-Allow-Origin" , "*");
//     res.header("Access-Control-Allow-Headers" , "*");

//     if(req.method == "OPTIONS"){
//         res.header("Access-Control-Allow-Methods" , 'POST , GET , PUT , PATCH , DELETE');
//         return res.status(200).json({});

//     }
//     next();
// });

// app.get("/",function(req , res){
//     res.send("hello world new project with mean stack");
//     res.end();
// });




// //const userRouter  = ;
// app.use("/user" , require("./routes/user"));

// app.listen(8081,function(){
//    console.log("server started");
// });
    
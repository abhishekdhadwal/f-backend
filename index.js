const Joi = require('joi');
// Joi.objectId = require('joi-objectid')(Joi);
const mongoose = require('mongoose');
const users = require('./routes/user');
const express = require('express');
const app = express();
const router = express.Router();

mongoose.connect('mongodb://localhost:27017/myDB',
  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true
  }
  // .then(() => console.log('Now connected to MongoDB!'))
  // .catch(err => console.error('Something went wrong', err))
);
   

app.use(express.json());
app.use("/user" , require("./routes/user"))

app.listen(3000,function(){
  console.log("server started");
});
 
 

const mongoose = require("mongooes");

class Database{

    constructor(){

        var config = {
         host:"localhost",
         user:"root",
         password:"",
         database:"myDB"
        };
        this.connection = mongoose.createConnection(config);
    }

    query(mongoose , args){
        return new Promise((resolve , rejecct)=>{
         this.connection.query(mongoose , args ,(err , result)=>{
             if(err)
             return  rejecct(err);
             resolve(result); 
             
         })
        })
    }
     close()
    {
      return new Promise((resolve , result) =>{
          this.connection.end(err =>{
            if(err)
            return reject(err);
            else
             resolve(result);
          });
          
      });
    };

    randomString(len){
        var charset ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        var randomString = '';
        for (var i=0 ; i <len; i++);{
          var randomPoz= Math.floor(Math.random() * charset.length);
          randomString +=charset.substring(randomPoz,randomPoz+1);
            
        }
        return randomString;
    }
    
};


module.exports={
    Database:Database
}


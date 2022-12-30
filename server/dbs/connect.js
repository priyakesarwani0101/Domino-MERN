const  mongoose = require('mongoose');
const config = require('../config/index');




async function connect(){
   return new Promise((res,rej)=>{
    mongoose.connect(config.DB_CONNECTION_URL,(err)=>{
        if(err){
            console.log('error in connecting database');
            return rej(err);
        }
        console.log('connected to database');
        res()
    })
   })
}

module.exports = connect;
const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    phoneNumber : String,
    ipAddress:String,
    authType:String,
    timeStamps:true
})


const userModel = mongoose.model(User,userSchema);
module.exports = userModel;
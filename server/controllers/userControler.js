const userModel = require('../dbs/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('../config');

function generateToken(user){
    if(user.phoneNumber){

    }
    return jwt.sign(user, config.JWT_SECRET_KEY);
}
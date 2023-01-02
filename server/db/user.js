
const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    mobileNo: String,
    password: {
        type: String,
        select: false
    },
    authType: String, // 'email-password', 'github', 'google', 'facebook',
}, {
    timestamps: true
})

const UserModel = mongoose.model('User', UserSchema);

module.exports = {
    UserModel
}
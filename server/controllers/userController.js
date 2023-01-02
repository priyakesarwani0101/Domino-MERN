const { UserModel } = require("../db/user");
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require("../config");

function generateToken(user) {
    if (user.password) {
        delete user.password
    }

    return jwt.sign(user, config.JWT_SECRET_KEY);
}

async function register({ name, email, password, ipAddress }) {

    const existing = await UserModel.findOne({
        email
    })

    if (existing) {
        throw new Error('User already exists with the given email');
    }

    password = bcryptjs.hashSync(password);

    user = await UserModel.create({
        name, email, password, ipAddress,
        authType: 'email-password'
    });

    user = user.toJSON();

    delete user.password;

    return user;
}

async function login({ email, password }) {

    const user = await UserModel.findOne({
        email,
        authType: 'email-password'
    })
        .select('_id name email password')

    if (!user) {
        throw new Error('User does not exist with the given email');
    }

    const match = bcryptjs.compareSync(password, user.password);

    if (!match) {
        throw new Error('The password is incorrect');
    }

    // generate token
    const token = generateToken(user.toJSON());

    return token;
}

async function loginMobile({ mobileNo, password }) {

    var name = `User${mobileNo}`;
    var email = `${mobileNo}@gmail.com`
    var user = await UserModel.findOne({
        mobileNo,
        authType: 'mobile-otp'
    })
        .select('_id name email mobileNo password')

    console.log(user)
    if (!user) {
        password = bcryptjs.hashSync(password);
        user = await UserModel.create({
            name, email, mobileNo, password,
            authType: 'mobile-otp'
        });
    }
    // generate token
    const token = generateToken(user.toJSON());

    return token;
}

async function getUserById(id) {
    const user = await UserModel.findById(id);

    return user;
}

module.exports = {
    register,
    login,
    loginMobile,
    getUserById,
}
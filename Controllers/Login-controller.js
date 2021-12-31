const User = require('../Models/database-models');


exports.loginGet = async (req, res, next) => {
    try {
        res.send('Logging in with google');
    } catch (error) {
        console.log(error);
    }
}


exports.logoutGet = async (req, res, next) => {
    try {
        res.send('Logging out');
    } catch (error) {
        console.log(error);
    }
}

exports.googleCallback = async (req, res, next) => {
    try {
        res.send("You reached the callback URI");
    } catch (error) {
        console.log(error);
    }
}
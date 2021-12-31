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
        
        res.redirect('http://localhost:3000');
    } catch (error) {
        console.log(error);
    }
}
const passport = require('passport');
const passportConfig = require('../config/passportConfig')(passport);


exports.logoutGet = async (req, res, next) => {
    try {
        req.logout();
        res.redirect('http://localhost:3000/login');
    } catch (error) {
        console.log(error);
    }
}

exports.googleCallback = async (req, res, next) => {
    try {
        if (!req.user) res.redirect('http://localhost:3000/login');
        else res.redirect('http://localhost:3000/home');
    } catch (error) {
        console.log(error);
    }
}

exports.getUser = async (req, res, next) => {
    try {
        console.log(req.user);
        res.send(req.user);
    } catch (error) {
        console.log(error);
    }
}
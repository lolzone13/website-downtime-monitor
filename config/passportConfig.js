const User = require('../Models/database-models');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
const colors = require('colors');

dotenv.config({ path: './config.env' });




module.exports = (passport) => {
    passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "http://localhost:5000/auth/google/callback",
    }, (accessToken, refreshToken, profile, done) => {
      console.log(profile);
    }

    ))

}
const User = require('../Models/database-models');
const passport = require('passport')
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const dotenv = require('dotenv');
const Userd = require('../Models/database-models').User;

dotenv.config({ path: './config.env' });




module.exports = (passport) => {
	passport.serializeUser((user, done) => {
		done(null, user.id);
	})
	passport.deserializeUser((id, done) => {
		Userd.findById(id).then((user) => {
			done(null, user);
		})
	})

	passport.use(new GoogleStrategy({
		clientID: process.env.GOOGLE_CLIENT_ID,
		clientSecret: process.env.GOOGLE_CLIENT_SECRET,
		callbackURL: "http://localhost:5000/auth/google/callback",
	}, (accessToken, refreshToken, profile, done) => {
		Userd.findOne({ googleID: profile.id }).then((existingUser) => {
			if (existingUser) {
				// console.log('existing user');
				done(null, existingUser);
			}
			else {
				new Userd({
					username: profile.displayName,
					googleID: profile.id
				}).save().then((newUser) => {
					console.log(`New User created ${newUser}`);
					done(null, newUser);
				});



			}
		})

	}

	))

}
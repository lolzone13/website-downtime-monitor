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
		callbackURL: "/auth/google/callback",
	}, (accessToken, refreshToken, profile, done) => {
		
		Userd.findOne({ googleID: profile.id }).then((existingUser) => {
			if (existingUser) {
			
				done(null, existingUser);
			}
			else {
				new Userd({
					username: profile.displayName,
					googleID: profile.id,
					email: profile.emails[0].value
				}).save().then((newUser) => {
					
					done(null, newUser);
				});
			}
		})

	}

	))

}
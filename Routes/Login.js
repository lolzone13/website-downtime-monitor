const router = require('express').Router();
const { googleCallback, logoutGet, getUser } = require('../Controllers/Login-controller');
const passport = require('passport');
const passportConfig = require('../config/passportConfig')(passport);


router
    .route('/google')
    .get(passport.authenticate('google', {
        scope: ['email', 'profile']
    }));

// callback route
router
    .route('/google/callback')
    .get(passport.authenticate('google'), googleCallback);

router
    .route('/logout')
    .get(logoutGet);

router
    .route('/getUser')
    .get(getUser);

module.exports = router;
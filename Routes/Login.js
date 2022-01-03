const router = require('express').Router();
const { googleCallback, logoutGet, getUser } = require('../Controllers/Login-controller');
const passport = require('passport');
const passportConfig = require('../config/passportConfig')(passport);


// auth check
function loggedIn(req, res, next)  {
    if (req.isAuthenticated()) next();
    else {
        res.send('Unauthenticated');
    }
}



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
    .get(loggedIn, getUser);

module.exports = router;
const express = require('express');
const router = express.Router();
const { getWebsites, deleteWebsite, postWebsite, updateWebsite, getAllUsers } = require('../Controllers/Website-controller');
const auth = require('../Middleware/Authorization');

router
    .route('/')
    //.all(auth)
    .get(getWebsites);


router
    .route('/:id')
    //.all(auth)
    .put(deleteWebsite);

router
    .route('/')
    //.all(auth)
    .put(postWebsite);

router
    .route('/update/:id')
    //.all(auth)
    .put(updateWebsite);

router
    .route('/all')
    //.all(auth)
    .get(getAllUsers)


module.exports = router;
const express = require('express');
const router = express.Router();
const { getWebsites, deleteWebsite, postWebsite, updateWebsite, getAllUsers } = require('../Controllers/Website-controller');

router
    .route('/')
    .get(getWebsites);


router
    .route('/:id')
    .put(deleteWebsite);

router
    .route('/')
    .put(postWebsite);

router
    .route('/:id')
    .put(updateWebsite);

router
    .route('/all')
    .get(getAllUsers)


module.exports = router;
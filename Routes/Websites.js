const express = require('express');
const router = express.Router();
const { getWebsites, deleteWebsite, postWebsite, updateWebsite } = require('../Controllers/Website-controller');

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




module.exports = router;
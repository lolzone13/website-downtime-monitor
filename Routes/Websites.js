const express = require('express');
const router = express.Router();
const { getWebsites, deleteWebsite, postWebsite } = require('../Controllers/Website-controller');

router
    .route('/')
    .get(getWebsites);


router
    .route('/:id')
    .delete(deleteWebsite);

router
    .route('/')
    .post(postWebsite);






module.exports = router;
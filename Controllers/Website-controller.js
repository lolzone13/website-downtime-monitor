/*
    @desc     Get all websites
    @routes   GET /api/websites
    @access   all (no auth for now)
*/
exports.getWebsites = (req, res, next) => {
    res.send('GET websites');
}

/*
    @desc     Delete website with given id
    @routes   POST /api/websites/:id
    @access   all (no auth for now)
*/
exports.deleteWebsite = (req, res, next) => {
    res.send('DELETE website');
}

/*
    @desc     Add a new website to the database
    @routes   DELETE /api/websites
    @access   all (no auth for now)
*/
exports.postWebsite = (req, res, next) => {
    res.send('POST websites');
}
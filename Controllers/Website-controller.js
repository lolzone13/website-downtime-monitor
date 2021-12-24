const Websites = require('../models/database-models');


/*
    @desc     Get all websites
    @routes   GET /api/websites
    @access   all (no auth for now)
*/
exports.getWebsites = async (req, res, next) => {
    try {
        const websiteList = await Websites.find();

        return res.status(200).json({
            success: true,
            count: websiteList.length,
            data: websiteList
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: 'Server Error!'
        });
        
    }
}

/*
    @desc     Delete website with given id
    @routes   POST /api/websites/:id
    @access   all (no auth for now)
*/
exports.deleteWebsite = async (req, res, next) => {
    try {
 
        const website = await Websites.findById(req.params.id);

        if (!website) {
            return res.status(404).json({
                success: false,
                error: 'Website not found!'
            });
        }

        else {
            await website.remove();

            return res.status(200).json({
                success: true,
                data: {}
            })
        }       
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        });        
    }
}

/*
    @desc     Add a new website to the database
    @routes   DELETE /api/websites/:id
    @access   all (no auth for now)
*/
exports.postWebsite = async (req, res, next) => {
    try {

        const websiteData = await Websites.create(req.body);

        return res.status(201).json({
            success: true,
            data: websiteData
        })
       
    } catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        });        
    }
}
/*
    @desc     Updates website status
    @routes   PUT /api/websites/:id
    @access   all (no auth for now)
*/
exports.updateWebsite = async (req, res, next) => {
    try {
        const website = await Websites.findById(req.params.id);
        if (!website) {
            return res.status(404).json({
                success: false,
                error: 'Website not found!'
            });
        }

        else {
            
            let newStatus = '';

            if (website.status === 'Up') newStatus = 'Down';
            else newStatus = 'Up';


            await Websites.findByIdAndUpdate(req.params.id, { status: newStatus })

            return res.status(200).json({
                success: true,
                data: {}
            })
        }
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        });        
    }
}
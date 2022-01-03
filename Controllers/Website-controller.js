const WebsiteModel = require('../models/database-models').Website;
const UserModel = require('../models/database-models').User;


/*
    @desc     Get all websites
    @routes   GET /api/websites
    @access   all (no auth for now)
*/
exports.getWebsites = async (req, res, next) => {
    try {
        
        const userDetails = await UserModel.findById(req.user._id);
        return res.status(200).json({
            success: true,
            count: userDetails.websites.length,
            data: userDetails.websites
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
        
        const userDetails = await UserModel.findById(req.user._id);
        
        const websiteList = userDetails.websites;
        const newWebsiteList = websiteList.filter(item => String(item._id) !== req.params.id);

        if (newWebsiteList.length === websiteList.length) {
            return res.status(404).json({
                success: false,
                error: 'Website not found!'
            });
        }

        else {
            await UserModel.findByIdAndUpdate(req.user._id, { websites: newWebsiteList });

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

        const userData = await UserModel.findById(req.user._id);
        let newWebsiteList = userData.websites;
        newWebsiteList.push(req.body);

        await UserModel.findByIdAndUpdate(req.user._id, { websites: newWebsiteList });

        return res.status(201).json({
            success: true,
            data: userData
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
        
        let userDetails = await UserModel.find();
       
        for(let i = 0; i<userDetails.length; i++) {
            let websiteData = userDetails[i].websites;

            for(let j = 0; j<websiteData.length; j++) {
                if (String(websiteData[j]._id) === req.params.id) {
                    websiteData[j].status = (websiteData[j].status === 'Up') ? 'Down' : 'Up';
                }
            }
  
            await UserModel.findByIdAndUpdate(userDetails[i]._id, { websites: websiteData });   
        }

        return res.status(200).json({
            success: true,
            data: userDetails
        })
        
        
    }
    catch (error) {
        return res.status(500).json({
            success: false,
            error: error
        });        
    }
}




/*
    @desc     Gets all users
    @routes   GET /api/websites/all
    @access   all (no auth for now)
*/


exports.getAllUsers = async (req, res, next) => {
    try {
        const userDetails = await UserModel.find();


        return res.status(200).json({
            success: true,
            count: userDetails.length,
            data: userDetails
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            error: 'Server Error!'
        })
    }
}
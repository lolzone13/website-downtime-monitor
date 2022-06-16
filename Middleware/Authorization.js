const dotenv= require('dotenv');

dotenv.config({path: '../Config/config.env'});


module.exports = async (req, res, next) => {
    try {
        if (req.user) {
            next();
        }
        else {
            return res.status(403).json({
                success: false,
                error: "Unauthorized"
            });
        }
    } catch (error) {
        res.status(403).json({
            success: false,
            error: "Unauthorized"
        });
    }
}
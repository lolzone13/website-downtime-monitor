const mongoose = require('mongoose');
const passportLocalMongoose = require("passport-local-mongoose");


const websiteSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: [true, 'Add website name']
    },
    url: {
        type: String,
        required: [true, 'Add URL']
    },
    status: {
        type: String,
        required: [true, 'Add status']
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});


websiteSchema.path('url').validate((val) => {
    urlRegex = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-/]))?/;
    return urlRegex.test(val);
}, 'Invalid URL.');

websiteSchema.path('status').validate((val) => {
    statusRegex = /(Up|Down)/;
    return statusRegex.test(val);
}, 'Invalid Status');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        trim: true,
        required: true
    },
    googleID: {
        type: String,
        trim: true,
        required: true,
        unique: true
    }
})

userSchema.plugin(passportLocalMongoose);

module.exports = {
    Website: mongoose.models.Website || mongoose.model('Website', websiteSchema),
    User: mongoose.models.User || mongoose.model('User', userSchema)
}



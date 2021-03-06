const mongoose = require('mongoose');
//const passportLocalMongoose = require("passport-local-mongoose");


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

// websiteSchema.path('createdBy').validate((val) => {
//     emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//     return emailRegex.test(val);
// }, 'Invalid Email');

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
    },
    email: {
        type: String,
        unique: true,
        required: true,
        trim: true
    },
    websites: [{
        type: websiteSchema,
    }]
})

userSchema.path('email').validate((val) => {
    emailRegex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return emailRegex.test(val);
}, 'Invalid Email');


//userSchema.plugin(passportLocalMongoose);

module.exports = {
    Website: mongoose.models.Website || mongoose.model('Website', websiteSchema),
    User: mongoose.models.User || mongoose.model('User', userSchema)
}



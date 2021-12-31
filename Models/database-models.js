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
        required: [true, 'Enter username'],
        unique: true
    },
    password: {
        type: String,
        trim: true,
        required: [true, 'Enter Password'],
        unique: true
    },
    websites: [{
        type: websiteSchema
    }]
})

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.models.User || mongoose.model('User', userSchema);


module.exports = mongoose.models.Website || mongoose.model('Website', websiteSchema);
//module.exports = mongoose.model('Website', websiteSchema);
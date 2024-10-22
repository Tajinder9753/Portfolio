const mongoose = require('mongoose');
const ContactSchema = new mongoose.Schema({
    firstname:{
        type:String,
        trim:true,
        required:'first name is required'
    },
    lastname:{
        type:String,
        trim:true,
        required:'last name is required'
    },
    email:{
        type:String,
        trim:true,
        unique:'Email already exists',
        match:[/.+\@.+\..+/, 'Please enter valid email'],
        required:'Email is required'
    },
    salt:String
});

module.exports = mongoose.model('Contact',ContactSchema);
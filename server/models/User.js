const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    name:{
        type:String,
        trim:true,
        required:'Name is required'
    },
    email:{
        type:String,
        trim:true,
        unique:'Email already exists',
        match:[/.+\@.+\..+/, 'Please enter valid email'],
        required:'Email is required'
    },
    created:
    {
        type:Date,
        default:Date.now
    },
    updated:
    {
        type:Date,
        default:Date.now
    },
    hashed_password:
    {
        type:String,
        required:'Password is required'
    },
    salt:String
});
UserSchema.virtual('password')
.set(function(password){
    this._password = password;
    this.hashed_password = password;
})
.get(function(){
    return this._password;
});
UserSchema.path('hashed_password').validate(function(v){
    if(this._password && this._password < 8)
    {
        this.invalidate('password','Password should be > 8 characters')
    }
    if(this.isNew && !this._password)
    {
        this.invalidate('password','password is required');
    }
}, null);
module.exports = mongoose.model('User',UserSchema);
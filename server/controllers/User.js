const User = require('../models/User.js');

const create = async(req,res) => {
    console.log("request received at /api/users POST");
    const user = new User(req.body)
    try{
        await user.save()
        return res.status(200).json({
            message:"Added Successfully"
        });
    }
    catch(err)
    {
        return res.status(400).json({
            error:"Error in creating user"
        })
    }
}
//update
const list = async(req,res)=>{
    try{
        let users = await User.find().select('name email updated created');
        res.json(users);
    }
    catch(err){
        return res.status(400).json({
            error:"Error in receiving list"
        })
    }
}

const userByID = async(req,res,next,id)=>{
    try{
        let user = await User.findById(id);
        if(!user)
            return res.status('400').json({
        error:"User doesn't exist"
        })
    req.profile = user
    next()
    }
    catch(err){
        return res.status(400).json({
            error:"Error in getting user by ID"
        })
    }
}

const read = (req,res) =>{
    req.profile.hashed_password = undefined
    req.profile.salt = undefined
    return res.json(req.profile)
}
const update = async(req,res) => {
    try{
        let user = req.profile
        user = extend(user,req.body)
        user.updated = Date.now()
        await user.save()
        user.hashed_password = undefined
        user.salt  = undefined
        res.json(user)
    }
    catch(err)
    {
    return res.status(400).json({
            error:"Error in updating"
        })   
    }
}
const remove = async(req,res) => {
    try{
        let user = req.profile
        let deletedUser = await user.deleteOne()
        deletedUser.hashed_password = undefined
        deletedUser.salt = undefined
        res.json(deletedUser)
    }
    catch(err)
    {
    return res.send(400).json({
            error:"Error in removing"
        })   
    }
}
module.exports = {create, userByID,read,list,remove,update}
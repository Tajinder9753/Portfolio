const Contact = require('../models/Contact.js');

const create = async(req,res) => {
    console.log("request received at /api/users POST");
    const contact = new Contact(req.body)
    try{
        await contact.save()
        return res.status(200).json({
            message:"Added Successfully"
        });
    }
    catch(err)
    {
        return res.status(400).json({
            error:"Error in creating contact"
        })
    }
}

const list = async(req,res)=>{
    try{
        let contacts = await Contact.find().select('firstname lastname email');
        res.json(contacts);
    }
    catch(err){
        return res.status(400).json({
            error:"Error in receiving list"
        })
    }
}

const contactByID = async(req,res,next,id)=>{
    try{
        let contact = await Contact.findById(id);
        if(!contact)
            return res.status('400').json({
        error:"Contact doesn't exist"
        })
    req.profile = contact
    next()
    }
    catch(err){
        return res.status(400).json({
            error:"Error in getting contact by ID"
        })
    }
}

const read = (req,res) =>{
    req.profile.hashed_password = undefined
    return res.json(req.profile)
}

const update = async(req,res) => {
    console.log("request received at /api/users PUT");
    try{
        let contact = req.profile
        contact = Object.assign(contact, req.body)
        contact.updated = Date.now()
        await contact.save()
        contact.salt  = undefined
        res.json(contact)
    }
    catch(err)
    {
    return res.status(400).json({
            error:"Error in updating contact"
        })   
    }
}

const remove = async(req,res) => {
    try{
        let contact = req.profile
        let deletedContact = await contact.deleteOne()
        deletedContact.salt = undefined
        res.json(deletedContact)
    }
    catch(err)
    {
    return res.send(400).json({
            error:"Error in removing contact"
        })   
    }
}

const removeAll = async (req, res) =>
    {
        try {
            await Contact.deleteMany({});
            res.status(200).json({
                message: "All contacts have been deleted"
            })
        }
        catch (err)
        {
            return res.status(400).json({
                error: "could not delete contact"
            })
        }
    };

module.exports = {create, contactByID,read,list,remove,update, removeAll}

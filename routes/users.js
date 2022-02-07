const router = require("express").Router();
const User = require("../models/User");
const bcrypt = require("bcrypt");
//CRUD

//UPDATE
router.put("/:id",async (req,res)=>{
    if(req.body.userId===req.params.id || req.user.isAdmin)
    {
        if(req.body.password)
        {
            try
            {
                const salt = await bcrypt.genSalt(10);
                req.body.password = await bcrpyt.hash(req.body.password,salt);
            } 
            catch(err)
            {
                return res.status(500).json(err);
            }
        }
        try
        {
            const user = await User.findByIdAndUpdate(req.params.id,{
                $set:req.body,
            });
            res.status(200).json("Account Updated");
        } 
        catch(err)
        {
            return res.status(500).json(err);
        }

    }
    else
    {
        return res.status(403).json(" Account not matching.");
    }
}) 


module.exports =  router
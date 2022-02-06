const router = require("express").Router();
const User = require("../models/User");

//REGISTER


router.get("/register",async (req,res)=>{
    const user = await new User({
        username:"Nikhil",
        email:"1234@gmail.com",
        password:"12344678"
    })
    await user.save()
    res.send("ok")

});

module.exports =  router
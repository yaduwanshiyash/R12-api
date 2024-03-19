
const user = require("../models/userModel")

exports.home = function (req, res, next) {
    res.status(200).json({ success: true, message: "This is test route" });
}

exports.createuser = async function (req, res, next) {
   try{
    const newuser = new user(req.body)
    await newuser.save()
    res.status(200).json({ success: true, user: newuser });

   }catch(error){
    res.status(500).json({ error: error.message });
   }
}
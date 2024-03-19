const mongoose = require('mongoose')

const userModel = new mongoose.Schema({
    username:{
        type: 'string',
        trim: true,
        required: [true,"username is required"],
        unique: true
    },
    email:{
        type: 'string',
        lowercase: true,
        trim: true,
        required: [true,"email is required"],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
    },
    password:{
        type: 'string',
        required: [true,"password is required"],
        unique: true,
        minLength:[3,"password length 3 characters"],
        maxLength:[15,"password length 15 characters"]
    },
    
},{timestamps:true})

const user = mongoose.model('User',userModel);

module.exports = user;
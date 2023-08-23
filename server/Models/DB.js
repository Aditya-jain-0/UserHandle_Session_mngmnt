const mongoose = require('mongoose');
const User = new mongoose.Schema({
    username : {
        type:String,
        requried : true,
        unique : true
    },
    email : {
        type:String,
        requried :true,
        unique : true
    },
    fullname : {
        type:String,
        requried :true,
    },
    phonenumber : {
        type:String,
        requried:true
    },
    password : {
        type:String,
        requried :true
    },
    jobprofile : {
        type:String,
        requried :true
    }
})

module.exports = mongoose.model("User",User)
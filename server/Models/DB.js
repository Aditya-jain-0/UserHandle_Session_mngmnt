const mongoose = require('mongoose');
const User = new mongoose.Schema({
    username : {
        type:String,
        requried : true
    },
    email : {
        type:String,
        requried :true
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
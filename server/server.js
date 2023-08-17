const express = require('express');
const cors = require('cors');
const PORT = 8000;
const User = require('./Models/DB')
const mongoose = require('mongoose');

//mongodb connection
mongoose.connect('mongodb://127.0.0.1:27017/User')  //default mongodb port
.then(()=>{console.log("Connection Successfull")})
.catch((err)=>{console.log(err)});

const app = express();

app.use(cors());
app.use(express.json())

app.get('/',(req,res)=>{
    res.json({
        "message" : "Hello from the json side"
    })
})

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    try{
        const user = await User.findOne({username:username , password : password});
        if(user){
            res.status(200).json({message : 'Login successfull'})
        }else{
            res.status(401).json({message :'Login failed'})
        }
    }catch(err){
        console.log(err)
        res.status(500).json({message : 'Internal Server error'})
    }
});

app.post('/register',async(req,res)=>{
    const { username, email, password, jobprofile } = req.body;
    const UserData = new User({
        username:username,
        email:email,
        password:password,
        jobprofile:jobprofile,
    });
    try {
        const savedUser = await UserData.save();
    } catch (error) {
        console.log(err);
    }
})

app.listen(PORT,()=>{
    console.log(`Server listening at port ${PORT}`)
})
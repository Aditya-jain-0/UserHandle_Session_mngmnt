const express = require('express');
const cors = require('cors');
const User = require('./Models/DB')
const mongoose = require('mongoose');
const session = require('express-session');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const PORT = process.env.PORT
const MONGO_URL = process.env.MONGO_URL
mongoose.connect(MONGO_URL)
.then(() => { console.log("DB Connected Successfully"); })
.catch((err) => { console.log(err); });

const app = express();

app.use(cors());
app.use(express.urlencoded({extended:true}))
app.use(express.json());
app.use(session({
    secret: 'iambatman',
    resave: false,
    saveUninitialized: true,
}));
app.use(cookieParser());

app.get('/:username', async (req, res) => {
    const { username } = req.params;
    if (req.session.userid && req.session.userid === username) {
        try {
            const user = await User.findOne({ username });
            if (user) {
                res.status(200).json(user);
            } else {
                res.status(401).json({ message: "User not Authorized" });
            }
        } catch (error) {
            res.status(500).json({ message: "Internal server error" });
        }
    } else {
        res.json({message : `${username} not authorized`});
    }
});

app.post('/', async (req, res) => {
    const { username, password } = req.body;
    try {
        const user = await User.findOne({ username, password });
        if (user) {
            req.session.userid = req.body.username
            res.status(200).json({ message: 'Login successful' });
        } else {
            res.status(401).json({ message: 'Login failed' });
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({ message: 'Internal Server error' });
    }
});

app.get('/:username/logout', (req, res) => {
    req.session.destroy();
    res.json({message:"loggout out"});
});

app.post('/register', async (req, res) => {
    const { username, email, fullname, phonenumber, password, jobprofile } = req.body;
    const UserData = new User({
        username: username,
        email: email,
        fullname: fullname,
        phonenumber: phonenumber,
        password: password,
        jobprofile: jobprofile,
    });
    try {
        const savedUser = await UserData.save();
        res.status(200).json({message : 'Registered succesfully'})
    } catch (error) {
        console.log(error);
    }
});

console.log(PORT)

app.listen(PORT, () => {
    console.log(`Server listening at port ${PORT}`);
});

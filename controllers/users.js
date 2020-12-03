const { response } = require('express');
const {User} = require('../models/User');
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');


module.exports.registerUser = (req,res) => {
    User.create(req.body).then(user => {
        const userToken = jwt.sign({
            id: user._id
        }, process.env.SECRET_KEY);
        res.cookie("usertoken", userToken, process.env.SECRET_KEY, {httpOnly: true}).json({ msg: "success!", user: user });
    })
    .catch(err => res.json(err));
}

module.exports.logUser =  async(req, res) => {
const user = await User.findOne({ email: req.body.email});
 
    if(user === null) {
        // email not found in users collection
        return res.sendStatus(400);
    }
 
    // if we made it this far, we found a user with this email address
    // let's compare the supplied password to the hashed password in the database
    const correctPassword = await bcrypt.compare(req.body.password, user.password);
 
    if(!correctPassword) {
        // password wasn't a match!
        return res.sendStatus(400);
    }
 
    // if we made it this far, the password was correct
    const userToken = jwt.sign({
        id: user._id
    }, process.env.SECRET_KEY);
 
    // note that the response object allows chained calls to cookie and json
    res
        .cookie("usertoken", userToken, process.env.SECRET_KEY, {
            httpOnly: true
            
        })
        .json({ msg: "success!" });
        
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.sendStatus(200);
}

module.exports.getAll = (req,res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => res.json(err))
}

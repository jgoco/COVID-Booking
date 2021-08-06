var express = require('express');
const passport = require('passport');
const validatePassword = require('../lib/passwordUtils').validatePassword;
const generatePassword = require('../lib/passwordUtils').generatePassword;
const User = require('../models/userModel');
const connection = require('../config/database');
var router = express.Router();

/* POST a login */
// passport.authenticate is a middleware in this case
router.post('/login', passport.authenticate('local', {
    failureRedirect: '/login',
    successRedirect: '/login-success'
}));

/* POST a registration */
router.post('/register', (req, res, next) => {
    let jsonObject = generatePassword(req.body.password);     // Returns a json object containing the salt and the hash
    let salt = jsonObject.salt;
    let hash = jsonObject.hash;

    // Create new user
    const newUser = new User({
        username: req.body.email,
        hash: hash,
        salt: salt
    }); 
    // Save to db
    newUser.save()
        .then((res) => {
            console.log(res);
        }); 
    // Redirection back to the login route
    res.redirect('/login');
}); 

// Login Success route (Temporary)
router.get('/login-success', (req, res, next) => {
    res.send('<h1> You successfully logged in. </h1>');
});

module.exports = router;
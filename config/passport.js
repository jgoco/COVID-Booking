const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const validatePassword = require('../lib/passwordUtils').validatePassword
const connection = require('../config/database');
const User = require('../models/userModel');

// Modified from PassportJS documentation on verifyCallback: http://www.passportjs.org/docs/username-password/ 
const verifyCallback = (username, password, callback) => {
    User.findOne({ username: username }, function(err, user) {
        if (err) { 
            // DB returns some kind of error
            return callback(err); 
        }
        if (!user) {
            // User does not exist in DB
            return callback(null, false, { message: 'Incorrect username.' });
        }
        // Password validation
        const isValid = validatePassword(password, user.hash, user.salt);
        if (!isValid) {
          return callback(null, false, { message: 'Incorrect password.' });
        }
        return callback(null, user);
      });
}

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);



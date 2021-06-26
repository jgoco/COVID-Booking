const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

// TODO: Other relevant DB imports

// Modified from PassportJS documentation on verify callback: http://www.passportjs.org/docs/username-password/ 

// TODO: Missing DB integration 

const verifyCallback = (username, password, done) => {
    User.findOne({ username: username }, function(err, user) {
        if (err) { 
            // DB returns some kind of error
            return done(err); 
        }
        if (!user) {
            // User does not exist in DB
            return done(null, false, { message: 'Incorrect username.' });
        }
        const isValid = validatePassword(password, user.hash, user.salt);
        if (!isValid) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        return done(null, user);
      });
}

const strategy = new LocalStrategy(verifyCallback);

passport.use(strategy);



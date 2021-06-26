var express = require('express');
const passport = require('passport');
const validatePassword = require('../lib/passwordUtils').validatePassword;
var router = express.Router();

/* POST a login */
router.post('/login', passport.authenticate('local'), (req, res, next) => {
    
});

module.exports = router;
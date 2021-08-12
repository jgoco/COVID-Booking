const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const {registrationValidation, loginValidation} = require('../inputValidation');

const signToken = id => {
    return jsonwebtoken.sign({ id }, process.env.JWT_SECRET, {
           expiresIn: 36000
    });
 }

 const createUserCookies = async(user, respCode, req, res) => {
    const token = signToken(user._id);
    let date = new Date();
    date.setDate(date.getDate() + 1);

    res.cookie('jwt', token, {
        expires: date,
        httpOnly: true
    });

    res.cookie('isUser', true, {
        expires: date,
        httpOnly: true
    });

    res.cookie('isFullyVaccinated', user.fullyVaccinated, {
        expires: date,
        httpOnly: true
    });

    user.password = undefined;
    res.status(respCode).json({
       status: 'success',
       token,
       data: {
          user
        }
    });
 }

async function loginUser(req, res, next) {
    let {error} = loginValidation(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
    }

    try {
        // Check if user exists
        let userExists = await User.findOne({email: req.body.email});
        if (!userExists) {
            return res.status(400).send("There is no user with the given email.");
        }

        // Verify password
        let verifyPassword = await bcrypt.compare(req.body.password, userExists.password);
        if (!verifyPassword) {
            return res.status(400).send("Incorrect password.");
        }
        createUserCookies(userExists, 201, req, res);
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Internal Server Error");
    }
} 

async function registerUser(req, res, next) {
    // We only care about validating these form fields
    const validatedFormData = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password
    }
    let {error} = registrationValidation(validatedFormData);
    if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
    }

    try {
        // Query db for duplicate user
        let userExists = await User.findOne({email: req.body.email});
        if (userExists) {
            return res.status(400).send("A user with this email already exists");
        }

        // Masking of password
        let salt = await bcrypt.genSalt(12);
        let maskedPassword = await bcrypt.hash(req.body.password, salt);

        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: maskedPassword,
            firstDose: req.body.firstDose,
            secondDose: req.body.secondDose,
            fullyVaccinated: (req.body.firstDose && req.body.secondDose) ? true : false
        });

        user.save()
            .then((data) => {
                console.log(data);
                createUserCookies(data, 201, req, res);
            })
    } catch (error) {
        console.error(error);
        res.status(500).send('Internal Server Error');
    }
}

module.exports.loginUser = loginUser;
module.exports.registerUser = registerUser;
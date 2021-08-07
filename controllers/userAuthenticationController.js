const User = require('../models/userModel');
const bcrypt = require('bcryptjs');
const jsonwebtoken = require('jsonwebtoken');
const {registrationValidation, loginValidation} = require('../inputValidation');

function getVaccinationStatus(vaccines) {
    if (vaccines.firstDose && vaccines.secondDose) {
        return true;
    } else {
        return false;
    }
}

async function loginUser(req, res, next) {
    let {error} = loginValidation(req.body);
    if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
    }

    let userExists = await User.findOne({email: req.body.email});
    if (!userExists) {
        return res.status(400).send("There is no user with the given email.");
    }

    // Verify password
    let verifyPassword = await bcrypt.compare(req.body.password, userExists.password);
    if (!verifyPassword) {
        return res.status(400).send("Incorrect password.");
    }

    // Web token - stored in the header
    let token = jsonwebtoken.sign({_id: userExists._id}, process.env.JWT_SECRET);
    res.header('Authentication-Token', token).send(token);
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
        registeredDate: new Date(req.body.registeredDate),
        vaccines: req.body.vaccines,
        fullyVaccinated: getVaccinationStatus(req.body.vaccines)      // TODO: Debug this method still
    });

    user.save()
        .then((data) => {
            console.log(data);
            res.send(data);
        })
        .catch((error) => {
            console.log(error);
            res.status(400).send(error);
        });
}

module.exports.loginUser = loginUser;
module.exports.registerUser = registerUser;
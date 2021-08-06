const router = require('express').Router();
const User = require('../models/userModel');
const {registrationValidation, loginValidation} = require('../inputValidation');

function getVaccinationStatus(vaccines) {
    if (vaccines.firstDose && vaccines.secondDose) {
        return true;
    } else {
        return false;
    }
}

router.post('/register', (req, res, next) => {
    let {error} = registrationValidation(req.body);

    if (error) {
        console.log(error);
        return res.status(400).send(error.details[0].message);
    } else {
        const user = new User({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
            password: req.body.password,
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

   
});

module.exports = router;
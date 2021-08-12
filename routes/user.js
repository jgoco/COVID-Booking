import auth from '../middleware/auth';
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');

const Appointment = require('../models/appointmentModel');

/* GET list of appointments. */
router.get('/', function(req, res, next) {
    Appointment.find()
        .exec()
        .then((data) => {
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        })
});

router.get('/user-cal', function (req, res, next) {

}) 

// TODO: implement once route is established
/* EDIT an appointment. */
router.patch('/:id', function(req, res, next) {
    const updateID = req.params['id'];
    const updateOps = req.body;
    console.log(updateOps);

    Appointment.findByIdAndUpdate(updateID, { $set: updateOps})
        .exec()
        .then((data) => {
            console.log(req.body['editName'] + ' was edited.');
            res.send(data);
        })
        .catch((err) => {
            console.log(err);
        })
});

module.exports = router;

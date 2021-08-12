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

/* GET appointment, check if full. */
router.get('/:id', function(req, res, next) {
    const classID = req.params['id'];
    Appointment.findById(classID)
        .exec()
        .then((data) => {
            let participants = data['participants'];
            let max = data['maxClassSize'];
            if (participants.length < max) {
                res.send(false)
            } else {
                res.send(true)
            }
        })
        .catch((err) => {
            console.log(err);
        })
});

/* EDIT an appointment. */
router.patch('/:id', function(req, res, next) {
    const userID = req.params['id'];
    const classIDobject = req.body;
    let classID = classIDobject['classID'];
    Appointment.findById(classID)
        .exec()
        .then((data) => {
            let oldParticipants = data['participants'];
            let newParticipants = oldParticipants.push(userID);
            let updateOps = {participants: newParticipants};
            Appointment.findByIdAndUpdate(classID, { $set: updateOps})
                .exec()
                .then((data) => {
                    res.send(data);
                })
                .catch((err) => {
                    console.log(err);
                })
        })
        .catch((err) => {
            console.log(err);
        })
});

module.exports = router;

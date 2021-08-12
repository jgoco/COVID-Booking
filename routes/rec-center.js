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

/* POST a new appointment. */
router.post('/', function(req, res, next) {
  let newApp = req.body;
  let maxSize = parseInt(newApp['maxClassSize'])
  if (maxSize > 0) {
      let updatedStart = newApp['startDate'].substring(0, 16);
      let sdate = updatedStart.substring(0, 11);
      let shour = parseInt(updatedStart.substring(11, 13)) - 7;
      let sminute = updatedStart.substring(13, 16);
      let newStart = '';
      if (shour < 10) {
          let shourString = shour.toString();
          newStart = sdate.concat('0').concat(shourString).concat(sminute);
      } else {
          let shourString = shour.toString();
          newStart = sdate.concat(shourString).concat(sminute);
      }
      let updatedEnd = newApp['endDate'].substring(0, 16);
      let edate = updatedEnd.substring(0, 11);
      let ehour = parseInt(updatedEnd.substring(11, 13)) - 7;
      let eminute = updatedEnd.substring(13, 16);
      let newEnd = '';
      if (ehour < 10) {
          let ehourString = ehour.toString();
          newEnd = edate.concat('0').concat(ehourString).concat(eminute);
      } else {
          let ehourString = ehour.toString();
          newEnd = sdate.concat(ehourString).concat(eminute);
      }
      let participantList = [];
      let uniqueID = new mongoose.Types.ObjectId();
      let dbNewApp = new Appointment({
          title: newApp['title'],
          startDate: newStart,
          endDate: newEnd,
          currentClassSize: 0,
          maxClassSize: maxSize,
          location: newApp['location'],
          notes: newApp['notes'],
          vaccinatedOnly: true,
          participants: participantList,
          id: uniqueID,
          _id: uniqueID,
      });
      dbNewApp.save()
          .then((data) => {
              res.send(dbNewApp);
          })
          .catch((err) => {
              console.log(err);
          })
  }
});

/* EDIT an appointment. */
router.patch('/:id', function(req, res, next) {
  const updateID = req.params['id'];
  const updateOps = req.body;
  Appointment.findByIdAndUpdate(updateID, { $set: updateOps})
      .exec()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      })
});

/* DELETE an appointment. */
router.delete('/:id', function(req, res, next) {
  const deleteID = req.params['id'];
  Appointment.findByIdAndDelete({_id: deleteID})
      .exec()
      .then((data) => {
        res.send(data);
      })
      .catch((err) => {
        console.log(err);
      })
});

module.exports = router;

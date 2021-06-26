var express = require('express');
var router = express.Router();

var classes =[
  {
    title: 'Pottery',
    startDate: '2021-06-25T08:00',
    endDate: '2021-06-25T10:00',
    location: 'Room 2'
  }
]

/* GET appointments. */
router.get('/', function(req, res, next) {
  res.send(classes);
});

module.exports = router;

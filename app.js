var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var dotenv = require('dotenv');

/* ----------- IMPORT ROUTES ----------- */ 
var indexRouter = require('./routes/index');
var recRouter = require('./routes/rec-center');
var userAuthenicationRoute = require('./routes/userAuthenticationRoute');
var userRouter = require('./routes/user');

// Gives access to env variables
dotenv.config();

var app = express();

/* ----------- EXPRESS MIDDLEWARE ----------- */ 
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// check route
app.use(express.static(path.join(__dirname, '/build')));


/* ----------- DATABASE CONNECTION ----------- */
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('[SUCCESS] Connected to MongoDB Atlas.'))
    .catch((error) => console.log(error));


/* ----------- ROUTES ----------- */ 
app.use('/', indexRouter);
app.use('/rec-center', recRouter);
app.use('/user', userAuthenicationRoute);
app.use('/user-cal', userRouter)


/* ----------- ERROR HANDLING ----------- */ 
app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

var createError = require('http-errors');
const express = require('express');
const session = require('express-session');
var passport = require('passport');
var crypto = require('crypto');               // For creating and verifying pw's 
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
const connnection = require('./server/config/database')

// Gives access to env variable
require('dotenv').config();

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/* ----------- EXPRESS MIDDLEWARE ----------- */ 
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

/* ----------- SESSION SETUP ----------- */ 

/* ----------- DATABASE CONNECTION ----------- */
mongoose.connect('mongodb+srv://m001-student:m001-mongodb-basics@sandbox.aekav.mongodb.net/covidbooking?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true });

/*
app.use(session({
    // secret: process.env.SECRET,
    resave: false,
    saveUninitialized: true,
    // store: sessionStorage,
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 7    // Cookies expire after 1 wk
    }
}));

 */

/* ----------- PASSPORT AUTHENICATION ----------- */ 
require('./config/passport');
app.use(passport.initialize());
app.use(passport.session());


/* ----------- ROUTES ----------- */ 
var indexRouter = require('./routes/index');
var recRouter = require('./routes/rec-center');
var loginRouter = require('./routes/login');

app.use('/', indexRouter);
app.use('/rec-center', recRouter);
app.use('/login', loginRouter);

/* ----------- ERROR HANDLING ----------- */ 
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

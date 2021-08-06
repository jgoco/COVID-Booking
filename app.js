var createError = require('http-errors');
var express = require('express');
var session = require('express-session');
var passport = require('passport');
var crypto = require('crypto');               // For creating and verifying pw's 
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var mongoose = require('mongoose');
var dotenv = require('dotenv');
const connnection = require('./config/database')


/* ----------- ROUTES ----------- */ 
var indexRouter = require('./routes/index');
var recRouter = require('./routes/rec-center');
var loginRouter = require('./routes/login');
var userAuthenicationRoute = require('./routes/userAuthentication');

// Gives access to env variables
dotenv.config();

var app = express();

/* ----------- EXPRESS MIDDLEWARE ----------- */ 
app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'build')));

/* ----------- SESSION SETUP ----------- */ 

/* ----------- DATABASE CONNECTION ----------- */
mongoose.connect(process.env.MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((result) => console.log('[SUCCESS] Connected to MongoDB Atlas.'))
    .catch((error) => console.log(error));

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

app.use('/', indexRouter);
app.use('/rec-center', recRouter);
app.use('/login', loginRouter);
app.use('/user', userAuthenicationRoute);

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

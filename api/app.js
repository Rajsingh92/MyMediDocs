require('./config/config');
require('./models/db');
require('./config/passportConfig');

const createError = require('http-errors');
const express = require('express');
const app = express();
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');
const passport = require('passport');

const rtsIndex = require('./routes/index.router');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

//moddleware
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors());
app.use(passport.initialize());



//routes
app.use('/api', rtsIndex);


app.use(function(req, res, next) {
  next(createError(404));
});

app.use(function(err, req, res, next) {
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  res.status(err.status || 500);
 // res.render('error');
});

module.exports = app;

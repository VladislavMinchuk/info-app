const port = process.env.PORT || '3000';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const passport = require('passport');
const db = require('./config/database');

// Test connection sequelize
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// Create global app object
const app = express();

// For BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// For Passport

app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true })); // session secret
app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// pages routing
app.use('/', require('./routers/index'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // render the error page
  res.status(err.status || 500);
  res.render('error', { message: err.message, error: err });
});

// Start our server
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});

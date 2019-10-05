const port = process.env.PORT || '3000';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const session = require('express-session');
const flash = require('connect-flash');
const methodOverride = require('method-override');
const db = require('./config/database');

// Create global app object
const app = express();

// Test connection sequelize
db.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

// For BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// For Override form methods
app.use(
  methodOverride(function(req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

// Session init
app.use(session({ secret: 'cat', resave: true, saveUninitialized: true })); // session secret

// Flesh message
app.use(flash());

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

// pages routing
app.use('/', require('./routers/index'));

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use((err, req, res, next) => {
  // render the error page
  res.status(err.status || 500);
  res.render('error-page', { message: err.message, statusCode: err.status });
});

// Start our server
app.listen(port, () => {
  console.log('Server listening on port ' + port);
});

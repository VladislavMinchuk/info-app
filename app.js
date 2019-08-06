const port = process.env.PORT || '3000';
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

// Create global app object
const app = express();

// Normal express config defaults
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));

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

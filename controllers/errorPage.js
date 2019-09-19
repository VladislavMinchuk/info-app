module.exports.getErrorPage = function(req, res) {
  res.render('error-page', {
    message: req.flash('messageSorry'),
    statusCode: req.flash('statusCode'),
  });
};

module.exports.getSorryPage = function(req, res) {
  res.render('sorry', {
    message: req.flash('messageSorry'),
  });
};

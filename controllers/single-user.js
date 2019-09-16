module.exports.getSingle = function(req, res) {
  res.render('user', {
    empyFields: req.flash('empyFields'),
    complete: req.flash('completeMsg'),
    badReqForm: req.flash('bodyForm'),
    formData: req.formData,
    userObject: req.userObject,
  });
};

module.exports.postSingleUser = function(req, res) {
  console.log(req.query);
  if (req.errorFields.length) {
    req.flash('bodyForm', req.body);
    req.flash('empyFields', req.errorFields);
    res.redirect('/');
    return;
  }
};

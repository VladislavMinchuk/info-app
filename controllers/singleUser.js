const Employees = require('../models').employees;
const toLowerCaseFunc = require('./toLowerCase');

module.exports.getSingleUser = function(req, res) {
  res.render('user', {
    empyFields: req.flash('empyFields'), // object with empty fields
    complete: req.flash('completeMsg'), // complete message
    badReqForm: req.flash('bodyForm'), // object with user input values
    formData: req.formData, // data for inputs from DB
    userObject: req.userObject, // user data from DB
  });
};

module.exports.putSingleUser = function(req, res) {
  const { name, surname, age, city, position, cluster } = toLowerCaseFunc(req.body); // return object

  if (req.errorFields.length) {
    req.flash('bodyForm', req.body); // set flash message with form values for inputs
    req.flash('empyFields', req.errorFields); // set flash message with errors empty fields
    res.redirect('/');
    return;
  }

  Employees.update(
    {
      name: name,
      surname: surname,
      age: age,
      city_id: city,
      position_id: position,
      cluster_id: cluster,
    },
    {
      where: { id: req.params.id },
    }
  )
    .then(data => {
      req.flash('completeMsg', `User ${name} ${surname} updated`); // set flash message
      res.redirect(`/users/${req.params.id}`);
    })
    .catch(err => {
      res.render('/error-page');
    });
};

module.exports.deleteSingleUser = function(req, res) {
  console.log(req.params.id);
  Employees.destroy({ where: { id: req.params.id } })
    .then(() => {
      req.flash('messageSorry', 'User deleted'); // set flash message
      res.redirect('/error-page');
    })
    .catch(err => {
      console.log(err);
      res.redirect('/error-page');
    });
};

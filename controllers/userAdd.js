const Employees = require('../models').employees;
const toLowerCaseFunc = require('./toLowerCase');

module.exports.getPage = (req, res) => {
  res.render('user-add', {
    empyFields: req.flash('empyFields'),
    complete: req.flash('completeMsg'),
    badReqForm: req.flash('bodyForm'),
    formData: req.formData,
  });
};

module.exports.addUser = (req, res) => {
  const { name, surname, age, city, position, cluster } = toLowerCaseFunc(req.body); // return object

  if (req.errorFields.length) {
    req.flash('bodyForm', req.body);
    req.flash('empyFields', req.errorFields);
    res.redirect('/form-add');
    return;
  }

  Employees.create({
    name: name,
    surname: surname,
    age: age,
    city_id: city,
    position_id: position,
    cluster_id: cluster,
  })
    .then(() => {
      req.flash('completeMsg', `User ${name} ${surname} added.`);
      console.log('User added');
      res.redirect('/form-add');
    })
    .catch(err => {
      res.redirect('/form-add');
      console.log('Error: ' + err);
    });
};

const Employees = require('../models').employees;

module.exports.getPage = (req, res) => {
  res.render('user-add', {
    empyFields: req.flash('empyFields'),
    complete: req.flash('completeMsg'),
    badReqForm: req.flash('bodyForm'),
  });
};

module.exports.addUser = (req, res) => {
  const { name, surname, age, city, position, cluster } = req.body;

  if (req.errorFields.length) {
    req.flash('bodyForm', req.body);
    req.flash('empyFields', req.errorFields);
    res.redirect('/user');
  } else {
    Employees.create({
      name: name,
      surname: surname,
      age: age,
      city: city,
      position: position,
      cluster: cluster,
    })
      .then(() => {
        req.flash('completeMsg', `User ${name} ${surname} added.`);
        console.log('User added');
        res.redirect('/user');
      })
      .catch(err => {
        console.log('Error: ' + err);
      });
  }
};

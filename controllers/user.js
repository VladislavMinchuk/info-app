const Employees = require('../models/Employees');

module.exports.getPage = (req, res) => {
  Employees.findAll({
    raw: true,
  })
    .then(items => {
      res.render('user-add', {
        empyFields: req.flash('empyFields'),
        complete: req.flash('completeMsg'),
      });
    })
    .catch(console.log);
};

module.exports.addUser = (req, res) => {
  const { name, surname, age, city, position, cluster } = req.body;

  if (req.errorFields.length) {
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
      .then(item => {
        req.flash('completeMsg', `User ${name} ${surname} added.`);
        console.log('User added');
        res.redirect('/user');
      })
      .catch(err => {
        console.log('Error: ' + err);
      });
  }
};

const Employees = require('../models/Employees');

module.exports.getPage = (req, res) => {
  Employees.findAll({
    raw: true,
  })
    .then(items => {
      res.render('user-add', { items: items });
    })
    .catch(console.log);
};

module.exports.addUser = (req, res) => {
  const { name, surname, age, city, position, cluster } = req.body;
  console.log(name, surname, age, city, position, cluster);
  res.redirect('/user');
};

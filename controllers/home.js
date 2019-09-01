const Op = require('Sequelize').Op;
const Employees = require('../models').employees;

module.exports.getIndex = function(req, res) {
  res.render('home', { formData: req.formData });
};

module.exports.getUsers = function(req, res) {
  const { name, age, city, cluster } = req.query;
  let fields = [];
  let where = {};

  for (const field in req.query) {
    if (req.query.hasOwnProperty(field)) {
      const value = req.query[field];
      fields.push(field);

      if (value) {
        where[field] = {
          [Op.or]: [value, ''],
        };
      }
    }
  }

  console.log(where);

  Employees.findAll({
    raw: true,
    where: {
      name: {
        [Op.or]: [name, ''],
      },
    },
    // attributes: fields,
  })
    .then(data => {
      // console.log(data);
      res.render('home', { formData: req.formData, data });
    })
    .catch(err => {
      console.log(err);
      res.render('home', { formData: req.formData, messageError: `${req.query.name} not found!` });
    });
};

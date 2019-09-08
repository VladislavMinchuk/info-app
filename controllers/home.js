const Op = require('Sequelize').Op;
const Employees = require('../models').employees;
const Cities = require('../models').cities;
const Clusters = require('../models').clusters;
const Positions = require('../models').positions;

module.exports.getIndex = function(req, res) {
  res.render('home', { formData: req.formData });
};

module.exports.getUsers = function(req, res) {
  const { name, surname, age, city, cluster, position } = req.query;
  let fieldsHasValue = {};

  for (const field in req.query) {
    if (req.query.hasOwnProperty(field)) {
      const value = req.query[field];

      if (value && (field === 'name' || field === 'surname' || field === 'age')) {
        fieldsHasValue[field] = value;
      }
    }
  }

  console.log(fieldsHasValue);

  Employees.findAll({
    raw: true,
    where: fieldsHasValue,
    include: [
      { model: Cities, where: { city: city }, attributes: ['city'] },
      { model: Positions, where: { position: position }, attributes: ['position'] },
      { model: Clusters, where: { cluster: cluster }, attributes: ['cluster'] },
    ],
    attributes: ['id', 'name', 'surname', 'age'],
  })
    .then(data => {
      console.log(data);
      res.render('home', { formData: req.formData, data: data, request: req.query });
    })
    .catch(err => {
      console.log(err);
      res.render('home', { formData: req.formData, messageError: `${req.query.name} not found!` });
    });
};

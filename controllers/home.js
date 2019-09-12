const Op = require('Sequelize').Op;
const Employees = require('../models').employees;
const Cities = require('../models').cities;
const Clusters = require('../models').clusters;
const Positions = require('../models').positions;

module.exports.getIndex = function(req, res) {
  res.render('home', { formData: req.formData });
};

module.exports.getUsers = function(req, res) {
  const messageError = 'User not found!';
  const { city, position, cluster } = req.query;
  let fieldsHasValue = {};
  let requestObj = {
    name: req.query.name,
    surname: req.query.surname,
    age: req.query.age,
  };

  for (const field in req.query) {
    if (req.query.hasOwnProperty(field)) {
      const value = req.query[field];

      if (value && (field === 'name' || field === 'surname' || field === 'age')) {
        fieldsHasValue[field] = value;
      }
    }
  }

  Employees.findAll({
    raw: true,
    where: fieldsHasValue,
    include: [
      { model: Cities, where: { id: city }, attributes: ['city'] },
      { model: Positions, where: { id: position }, attributes: ['position'] },
      { model: Clusters, where: { id: cluster }, attributes: ['cluster'] },
    ],
    attributes: ['id', 'name', 'surname', 'age'],
  })
    .then(data => {
      if (data.length) {
        requestObj.city = data[0]['city.city'];
        requestObj.position = data[0]['position.position'];
        requestObj.cluster = data[0]['cluster.cluster'];

        res.render('home', { formData: req.formData, data: data, request: requestObj });
      } else {
        res.render('home', { formData: req.formData, messageError: messageError });
      }
    })
    .catch(err => {
      console.log(err);
      res.render('home', { formData: req.formData, messageError: messageError });
    });
};

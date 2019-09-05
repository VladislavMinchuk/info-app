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
  let fields = [];
  let where = {};

  for (const field in req.query) {
    if (req.query.hasOwnProperty(field)) {
      const value = req.query[field];
      fields.push({ [field]: value });

      // if (value) {
      //   where[field] = {
      //     [Op.or]: [value, ''],
      //   };
      // }
    }
  }

  // console.log(fields);

  Employees.findAll({
    raw: true,
    where: {
      name: {
        [Op.or]: [name, ''],
      },
    },
    include: [
      { model: Cities, where: { city: city }, attributes: ['city'] },
      // { model: Positions, where: { position: position }, attributes: ['position'] },
      // { model: Clusters, where: { cluster: cluster }, attributes: ['cluster'] },
    ],
    attributes: ['id', 'name', 'surname'],
  })
    .then(data => {
      console.log(data);
      res.render('home', { formData: req.formData, data });
    })
    .catch(err => {
      console.log(err);
      res.render('home', { formData: req.formData, messageError: `${req.query.name} not found!` });
    });
};

const Employees = require('../models').employees;

module.exports = function(req, res, next) {
  const id = req.params.id;
  Employees.findOne({
    raw: true,
    where: {
      id: id,
    },
    attributes: ['id', 'name', 'surname', 'age', 'position_id', 'city_id', 'cluster_id'],
  })
    .then(data => {
      req.userObject = data;
      next();
    })
    .catch(console.log);
};

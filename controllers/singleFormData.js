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
      console.log(data);
      if (data) {
        req.userObject = data;
        next();
      } else {
        throw Error('Have no user!');
      }
    })
    .catch(err => {
      console.log(err);
      req.flash('messageSorry', `${err}`); // set flash message
      req.flash('statusCode', 404); // set flash message
      res.redirect('/error-page');
    });
};

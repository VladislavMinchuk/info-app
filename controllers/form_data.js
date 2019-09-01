const Cities = require('../models').cities;
const Positions = require('../models').positions;
const Clusters = require('../models').clusters;

module.exports = async function(req, res, next) {
  // cities, positions, clusters from DB added to req.formData object
  req.formData = {
    cities: await Cities.findAll({
      raw: true,
      attributes: ['city'],
    }),
    positions: await Positions.findAll({
      raw: true,
      attributes: ['position'],
    }),
    clusters: await Clusters.findAll({
      raw: true,
      attributes: ['cluster'],
    }),
  };

  next();
};

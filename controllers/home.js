const Cities = require('../models').cities;
const Positions = require('../models').positions;
const Clusters = require('../models').clusters;

module.exports.getIndex = async function(req, res) {
  let data = {
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

  res.render('home', { data });
};

module.exports.sendData = function(req, res) {
  res.json({ title: 'Main' });
};

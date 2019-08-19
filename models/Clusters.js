const Sequelize = require('sequelize');
const db = require('../config/database');

const Clusters = db.define(
  'clusters',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    clusters: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Clusters;

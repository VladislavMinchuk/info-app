const Sequelize = require('sequelize');
const db = require('../config/database');

const Positions = db.define(
  'positions',
  {
    id: {
      type: Sequelize.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    positions: {
      type: Sequelize.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Positions;

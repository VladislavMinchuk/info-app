const Sequelize = require('sequelize');
const db = require('../config/database');

const Employees = db.define(
  'employees',
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: Sequelize.STRING,
    },
    surname: {
      type: Sequelize.STRING,
    },
    age: {
      type: Sequelize.INTEGER,
    },
    city: {
      type: Sequelize.STRING,
    },
    position: {
      type: Sequelize.STRING,
    },
    cluster: {
      type: Sequelize.INTEGER,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = Employees;

const Sequelize = require('sequelize');

module.exports = new Sequelize('info_db', 'root', '1234', {
  host: 'localhost',
  dialect: 'mysql',
  // disable logging; default: console.log
  logging: false,
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000,
  },
});

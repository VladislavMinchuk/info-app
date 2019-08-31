'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'cities',
      [
        {
          city: 'kharkiv',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: 'lviv',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: 'odessa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          city: 'kyiv',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('cities', null, {});
  },
};

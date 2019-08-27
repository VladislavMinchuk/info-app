'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'positions',
      [
        {
          position: 'front end',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: 'back end',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: 'pm',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          position: 'qa',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('positions', null, {});
  },
};

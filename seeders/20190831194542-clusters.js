'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'clusters',
      [
        {
          cluster: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cluster: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cluster: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cluster: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cluster: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          cluster: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('clusters', null, {});
  },
};

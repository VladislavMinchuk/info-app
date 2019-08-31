'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      'employees',
      [
        {
          name: 'jhon',
          surname: 'jhonson',
          age: 22,
          position_id: 2,
          city_id: 3,
          cluster_id: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('employees', null, {});
  },
};

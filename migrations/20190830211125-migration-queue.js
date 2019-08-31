'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface
      .createTable('positions', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER,
        },
        position: {
          allowNull: false,
          type: Sequelize.STRING,
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE,
        },
      })
      .then(() => {
        return queryInterface.createTable('cities', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          city: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
      })
      .then(() => {
        return queryInterface.createTable('clusters', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          cluster: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
      })
      .then(() => {
        return queryInterface.createTable('employees', {
          id: {
            allowNull: false,
            autoIncrement: true,
            primaryKey: true,
            type: Sequelize.INTEGER,
          },
          name: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          surname: {
            allowNull: false,
            type: Sequelize.STRING,
          },
          age: {
            allowNull: false,
            type: Sequelize.INTEGER,
          },
          position_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'positions',
              key: 'id',
            },
          },
          city_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'cities',
              key: 'id',
            },
          },
          cluster_id: {
            allowNull: false,
            type: Sequelize.INTEGER,
            references: {
              model: 'clusters',
              key: 'id',
            },
          },
          createdAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
          updatedAt: {
            allowNull: false,
            type: Sequelize.DATE,
          },
        });
      })
      .catch(console.log);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface
      .dropTable('employees')
      .then(() => {
        return queryInterface.dropTable('positions');
      })
      .then(() => {
        return queryInterface.dropTable('cities');
      })
      .then(() => {
        return queryInterface.dropTable('clusters');
      })
      .catch(console.log);
  },
};

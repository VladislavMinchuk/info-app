'use strict';
module.exports = (sequelize, DataTypes) => {
  const Employees = sequelize.define(
    'employees',
    {
      name: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      surname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      age: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      position_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      city_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      cluster_id: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
    },
    {}
  );
  Employees.associate = function(models) {
    Employees.belongsTo(models.positions, { foreignKey: 'position_id' });
    Employees.belongsTo(models.cities, { foreignKey: 'city_id' });
    Employees.belongsTo(models.clusters, { foreignKey: 'cluster_id' });
  };
  return Employees;
};

'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cities = sequelize.define(
    'cities',
    {
      city: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Cities.associate = function(models) {
    Cities.hasMany(models.employees, { foreignKey: 'city_id' });
  };
  return Cities;
};

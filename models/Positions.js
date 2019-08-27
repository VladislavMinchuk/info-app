'use strict';
module.exports = (sequelize, DataTypes) => {
  const Positions = sequelize.define(
    'positions',
    {
      position: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Positions.associate = function(models) {
    Positions.hasMany(models.employees, { foreignKey: 'position_id' });
  };
  return Positions;
};

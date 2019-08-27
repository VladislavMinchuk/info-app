'use strict';
module.exports = (sequelize, DataTypes) => {
  const Clusters = sequelize.define(
    'clusters',
    {
      cluster: {
        allowNull: false,
        type: DataTypes.STRING,
      },
    },
    {}
  );
  Clusters.associate = function(models) {
    Clusters.hasMany(models.employees, { foreignKey: 'cluster_id' });
  };
  return Clusters;
};

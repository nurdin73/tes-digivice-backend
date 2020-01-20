'use strict';
module.exports = (sequelize, DataTypes) => {
  const stats = sequelize.define('stats', {
    status: DataTypes.STRING
  }, {});
  stats.associate = function(models) {
    // associations can be defined here
    stats.hasMany(models.movies, {
      as: 'stat',
      foreignKey: 'statsId'
    })
  };
  return stats;
};
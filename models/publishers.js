'use strict';
module.exports = (sequelize, DataTypes) => {
  const publishers = sequelize.define('publishers', {
    companyName: DataTypes.STRING
  }, {});
  publishers.associate = function(models) {
    // associations can be defined here
    publishers.hasMany(models.movies, {
      foreignKey: "publishId",
      as: "publisher"
    })
  };
  return publishers;
};
'use strict';
module.exports = (sequelize, DataTypes) => {
  const listgenres = sequelize.define('listgenres', {
    genreId: DataTypes.INTEGER,
    movieId: DataTypes.INTEGER
  }, {});
  listgenres.associate = function(models) {
    // associations can be defined here
    listgenres.belongsTo(models.genres, {
      foreignKey: 'genreId',
      sourceKey: 'id'
    })
    listgenres.belongsTo(models.movies, {
      foreignKey: 'movieId',
      sourceKey: 'id'
    })
  };
  return listgenres;
};
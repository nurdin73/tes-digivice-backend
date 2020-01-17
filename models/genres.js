'use strict';
module.exports = (sequelize, DataTypes) => {
  const genres = sequelize.define('genres', {
    name: DataTypes.STRING
  }, {});
  genres.associate = function(models) {
    // associations can be defined here
    genres.belongsToMany(models.movies, {
      through: models.listgenres,
      as: 'movies',
      foreignKey: 'genreId'
    })
  };
  return genres;
};
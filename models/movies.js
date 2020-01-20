'use strict';
module.exports = (sequelize, DataTypes) => {
  const movies = sequelize.define('movies', {
    title: DataTypes.STRING,
    poster: DataTypes.STRING,
    publishId: DataTypes.INTEGER,
    overview: DataTypes.TEXT,
    rating: DataTypes.INTEGER,
    dateReleased: DataTypes.STRING,
    statsId: DataTypes.INTEGER,
    nowPlaying: DataTypes.BOOLEAN
  }, {});
  movies.associate = function(models) {
    // associations can be defined here
    movies.belongsToMany(models.genres, {
      through: models.listgenres,
      as: 'genres',
      foreignKey: 'movieId'
    })
    movies.belongsTo(models.publishers, {
      foreignKey: "publishId",
      as: "publisher",
      sourceKey: "id"
    })
    movies.belongsTo(models.stats, {
      foreignKey: "statsId",
      as: "stat",
      sourceKey: "id"
    })
  };
  return movies;
};
'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('listgenres', [
      {
        genreId: 1,
        movieId: 2
      },
      {
        genreId: 2,
        movieId: 2
      },
      {
        genreId: 4,
        movieId: 1
      },
      {
        genreId: 3,
        movieId: 1
      },
      {
        genreId: 1,
        movieId: 1
      },
      {
        genreId: 5,
        movieId: 3
      },
      {
        genreId: 3,
        movieId: 3
      },
      {
        genreId: 2,
        movieId: 3
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('listgenres', null, {});
  }
};

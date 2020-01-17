'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('genres', 
    [
      {
        name: 'Fantasy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Thriller',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Drama',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Sci-Fi',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Comedy',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('genres', null, {});
  }
};

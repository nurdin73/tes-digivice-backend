'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('stats', [
      {
        status: 'released',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        status: 'upcoming',
        createdAt: new Date(),
        updatedAt: new Date() 
      },
  ], {});
  },

  down: (queryInterface, Sequelize) => {
      return queryInterface.bulkDelete('stats', null, {});
  }
};

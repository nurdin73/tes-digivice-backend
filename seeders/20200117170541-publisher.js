'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('publishers', [
      {
        companyName: 'Marvel',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyName: 'Disney',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyName: 'Sony',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        companyName: 'Netflix',
        createdAt: new Date(),
        updatedAt: new Date()
      }
  ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('publishers', null, {});
  }
};

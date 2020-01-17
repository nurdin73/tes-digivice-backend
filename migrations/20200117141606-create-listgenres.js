'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('listgenres', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      genreId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'genres',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      movieId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'movies',
          key: 'id'
        },
        onDelete: 'cascade',
        onUpdate: 'cascade'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('listgenres');
  }
};
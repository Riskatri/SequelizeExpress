'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      publised_date: {
        type: Sequelize.DATE
      },
      pages: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      language: { type: Sequelize.STRING},
      publised_id: {type: Sequelize.STRING},
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
    return queryInterface.dropTable('Books');
  }
};
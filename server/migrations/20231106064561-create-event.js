'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Events', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      company_id: {
        type: Sequelize.STRING
      },
      vendor_id: {
        type: Sequelize.INTEGER
      },
      eventName: {
        type: Sequelize.STRING
      },
      proposeDate1: {
        type: Sequelize.DATE
      },
      proposeDate2: {
        type: Sequelize.DATE
      },
      proposeDate3: {
        type: Sequelize.DATE
      },
      location: {
        type: Sequelize.STRING
      },
      status: {
        type: Sequelize.ENUM("Pending", "Approved", "Rejected")
      },
      remark: {
        type: Sequelize.TEXT
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Events');
  }
};
'use strict';
const {
  faker
} = require('@faker-js/faker');

const approve = [...Array(5)].map(() => ({
  vendor_id: faker.number.octal({
    min: 1,
    max: 5
  }),
  event_id: faker.number.octal({
    min: 1,
    max: 5
  }),
  status: faker.helpers.arrayElement(["Pending", "Approved", "Rejected"]),
  confirmDate: null,
  reason: faker.lorem.text(),
  createdAt: new Date(),
  updatedAt: new Date(),
}))
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('approvalVendors', approve, {});

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('approvalVendors', null, {});

  }
};
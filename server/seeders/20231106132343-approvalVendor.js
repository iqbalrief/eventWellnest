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
  status: faker.helpers.arrayElement(["Approved", "Rejected"]),
  confirmDate: new Date(),
  reason: faker.lorem.text({min:3, max:5}),
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
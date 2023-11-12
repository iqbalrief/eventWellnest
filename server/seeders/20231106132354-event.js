'use strict';
const {
  faker
} = require('@faker-js/faker');

const events = [...Array(5)].map((event) => ({
  eventName: faker.commerce.department(),
  company_id: faker.number.octal({
    min: 1,
    max: 5
  }),
  vendor_id: faker.number.octal({
    min: 1,
    max: 5
  }),
  proposeDate1: new Date(),
  proposeDate2: new Date(),
  proposeDate3: new Date(),
  location: faker.location.state(),
  status: faker.helpers.arrayElement(["Pending", "Approved", "Rejected"]),
  remark: faker.lorem.text({min: 3, max: 5}),
  createdAt: new Date(),
  updatedAt: new Date()
}))
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Events', events, {});
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Events', null, {});
  },
};
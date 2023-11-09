'use strict';
const {
  faker
} = require('@faker-js/faker');
const bcrypt = require("bcrypt")



const vendors = [...Array(5)].map(() => ({

  username: faker.person.fullName(),
  lastname: faker.person.lastName(),
  type: "vendors",
  email: faker.internet.email(),
  password: bcrypt.hashSync("vendors", 10),
  vendorName: faker.company.buzzPhrase(),
  createdAt: new Date(),
  updatedAt: new Date()
}))
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Vendors', vendors, {
      validate: true,
      individualHooks: true
    });
  },


  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Vendors', null, {});

  }
};
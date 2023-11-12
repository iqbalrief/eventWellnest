'use strict'
const {
  faker
} = require('@faker-js/faker');
const bcrypt = require("bcrypt")

const companies = [...Array(5)].map(() => ({

  username: faker.person.fullName(),
  lastname: faker.person.lastName(),
  email: faker.internet.email(),
  password: bcrypt.hashSync("company", 10),
  companyName: faker.company.buzzPhrase(),
  createdAt: new Date(),
  updatedAt: new Date()

}))
/** @type {import('sequelize-cli').Migration} */
module.exports = {

  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Companies', companies, {
      validate: true,
      individualHooks: true
    });

  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Companies', null, {});
  },
};
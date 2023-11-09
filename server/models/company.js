'use strict';
const bcrypt = require('bcrypt')
const { faker } = require('@faker-js/faker');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Company.hasMany(models.Event, {
        foreignKey: 'company_id',
      });
    }
  }
  Company.init({
    username: {
     type: DataTypes.STRING,
     allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    lastname: {
       type: DataTypes.STRING,
       allowNull: false,
        validate: {
          notEmpty: true,
        },
      },
      type: {
        type: DataTypes.STRING,
         allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
         allowNull: false,
          validate: {
            notEmpty: true,
            isEmail: true,
          },
      },
      password: 
      {
       type: DataTypes.STRING,
       allowNull: false,
       validate: {
         notEmpty: true,
       },
      },
    companyName: {
    type: DataTypes.STRING,
    validate: {
      notEmpty: true,
      unique: true,
    },
  },
  }, {
    sequelize,
    modelName: 'Company',
    hooks: {
      beforeCreate: async (company, options) => {
        if (!company.companyName && !company.type) {       
          company.companyName = faker.company.buzzPhrase();
          company.type = "company"
        }
        const hashedPassword = await bcrypt.hash(company.password, 10);
        company.password = hashedPassword;
      },
    },
  });

  
  
  return Company;
};
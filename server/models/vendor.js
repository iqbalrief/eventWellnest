'use strict';
const bcrypt = require('bcrypt');
const { faker } = require('@faker-js/faker');
const {
  Model
} = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Vendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Vendor.hasMany(models.Event, {
        foreignKey: 'vendor_id',
      });
      Vendor.hasMany(models.approvalVendor, {
        foreignKey: 'vendor_id',
      });
    }
  }
  Vendor.init({
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
     vendorName: {
     type: DataTypes.STRING,
     allowNull: true,
     unique: true,
     validate: {
       notEmpty: true,
     },
   },
  }, {
    sequelize,
    modelName: 'Vendor',
    hooks: {
      beforeCreate: async (vendor, options) => {
        if (!vendor.vendorName && !vendor.type) {       
          vendor.vendorName = faker.company.buzzPhrase();
        }

        const hashedPassword = await bcrypt.hash(vendor.password, 10);
        vendor.password = hashedPassword;

      },
    },
  });
  return Vendor;
};
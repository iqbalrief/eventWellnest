'use strict';
const { faker } = require('@faker-js/faker');
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Event extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Event.belongsTo(models.Company, {
        foreignKey: "company_id",
      });
      Event.belongsTo(models.Vendor, {
        foreignKey: "vendor_id",
      });
      Event.hasMany(models.approvalVendor, {
        foreignKey: "event_id"
      })
    }
  }
  Event.init({
    eventName: {
      type: DataTypes.STRING,
      allowNull: false,
       validate: {
         notEmpty: true,
       },
    },
    company_id: DataTypes.INTEGER,
    vendor_id: DataTypes.INTEGER,
    proposeDate1: DataTypes.DATE,
    proposeDate2: DataTypes.DATE,
    proposeDate3: DataTypes.DATE,
    location: {
      type: DataTypes.STRING,
       validate: {
         notEmpty: true,
       },
    },
    status: DataTypes.ENUM("Pending", "Approved", "Rejected"),
    remark: DataTypes.TEXT
  }, {
    sequelize,
    modelName: 'Event',
    hooks: {
      beforeCreate: async (event, options) => {
        if (!event.location) {       
          event.location = faker.location.state();
        }
       
      },
    },

  });
  return Event;
};
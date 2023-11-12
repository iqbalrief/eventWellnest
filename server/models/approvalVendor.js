'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class approvalVendor extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      approvalVendor.belongsTo(models.Vendor, {
        foreignKey: "vendor_id",
      });
      approvalVendor.belongsTo(models.Event, {
        foreignKey: "event_id",
      });
    }
  }
  approvalVendor.init({
    vendor_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER,
    status: DataTypes.ENUM("Approved", "Rejected"),
    reason: DataTypes.TEXT,
    confirmDate: {
      type: DataTypes.DATE,
      validate: {
        notEmpty:true
      }
    }
  }, {
    sequelize,
    modelName: 'approvalVendor',
  });
  return approvalVendor;
};
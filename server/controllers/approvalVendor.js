const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {
  Vendor,
  Event,
  approvalVendor
} = require('../models');

const ConfirmByVendors = async (req, res) => {

  const {
    chosenDate,
    reason,
    eventId,
    vendorId,
    status
  } = req.body;

  try {
    const event = await Event.findByPk(eventId);
    if (!event || event.status !== "Pending" || event.vendor_id !== vendorId) {
      return res.status(404).json({
        message: 'Event not found or you do not have permission to confirm this event.'
      });
    }

    let confirmDate;
    if (chosenDate === 'proposeDate1') {
      confirmDate = event.proposeDate1;
    } else if (chosenDate === 'proposeDate2') {
      confirmDate = event.proposeDate2;
    } else if (chosenDate === 'proposeDate3') {
      confirmDate = event.proposeDate3;
    } else {
      return res.status(400).json({
        message: 'Pilih salah satu dari proposeDate1, proposeDate2, atau proposeDate3.'
      });
    }

    const vendor = await Vendor.findByPk(vendorId);
    if (!vendor) {
      return res.status(404).json({
        message: 'Vendor not found.'
      });
    }

    await Event.update({
      status
    }, {
      where: {
        id: eventId
      }
    });

    const newApproval = await approvalVendor.create({
      event_id: eventId,
      vendor_id: vendorId,
      status,
      reason,
      confirmDate
    });

    return res.status(200).json({
      message: 'The event was successfully received with the selected date',
      dataApproval: newApproval
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server Internal error'
    });
  }
}


const updateByVendor = async (req, res) => {
  const {
    chosenDate,
    reason,
    status,
    eventId,
    vendorId
  } = req.body;
  const {
    id
  } = req.params;

  try {
    const approval = await approvalVendor.findByPk(id);
    if (!approval) {
      return res.status(404).json({
        message: 'Approval Not Found'
      });
    }

    const vendor = await Vendor.findByPk(vendorId);
    if (!vendor) {
      return res.status(404).json({
        message: 'Vendor not found.'
      });
    }

    const event = await Event.findByPk(eventId);
    if (!approval || !event) {
      return res.status(400).json({
        message: 'Invalid data for updating approval.'
      });
    }

    if (event.id !== eventId || event.vendor_id !== vendorId) {
      return res.status(400).json({
        message: 'Invalid eventId or vendorId for updating approval.'
      });
    }

    let confirmDate;
    if (chosenDate === 'proposeDate1') {
      confirmDate = event.proposeDate1;
    } else if (chosenDate === 'proposeDate2') {
      confirmDate = event.proposeDate2;
    } else if (chosenDate === 'proposeDate3') {
      confirmDate = event.proposeDate3;
    } else {
      return res.status(400).json({
        message: 'Pilih salah satu dari proposeDate1, proposeDate2, atau proposeDate3.'
      });
    }


    await Event.update({
      status
    }, {
      where: {
        id: eventId
      }
    });

    if (approval.event_id !== eventId || approval.vendor_id !== vendorId) {
      return res.status(400).json({
        message: 'Invalid eventId or vendorId in approval data.'
      });
    }

    await approval.update({
      status,
      reason,
      confirmDate,
      eventId,
      vendorId
    }, {
      where: {
        id: id
      }
    });

    return res.status(200).json({
      message: 'Approval berhasil diperbarui.',
      dataApproval: approval
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({
      message: 'Server Internal Error'
    });
  }
};

const getAllByVendor = async (req, res) => {
  try {
    const findAllEvent = await approvalVendor.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
      include: [{
        model: Vendor,
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },

      }, {
        model: Event,
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
      }],

    });
    res.status(200).json({
      success: true,
      message: "Data Approve Successfully",
      dataEvent: findAllEvent
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Data Approve Failed",
      error
    });
  }
}

const getIdByVendor = async (req, res) => {
  try {
    const findAllEvent = await approvalVendor.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
      include: [{
        model: Vendor,
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },

      }, {
        model: Event,
        attributes: {
          exclude: ['createdAt', 'updatedAt']
        },
      }],

    });
    res.status(200).json({
      success: true,
      message: "Data Approve Successfully",
      dataEvent: findAllEvent
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Data Approve Failed",
      error
    });
  }
}

const deleteByVendor = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const destroyByVendor = await approvalVendor.findByPk(id);
    if (!destroyByVendor) {
      return res.status(404).json({
        success: false,
        message: "Data Approval Not Found"
      })
    }

    await approvalVendor.destroy({
      where: {
        id: id
      }
    });

    return res.status(200).json({
      success: true,
      message: "Data Approval Success Delete"
    })
  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Delete Data Company Failed",
      error
    })
  }
}



module.exports = {
  ConfirmByVendors,
  updateByVendor,
  getAllByVendor,
  getIdByVendor,
  deleteByVendor
}
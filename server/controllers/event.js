const {
    Company,
    Event,
    Vendor
  } = require('../models');
  const {
    convertToAsiaTimezone
  } = require('../helper/converterZone');
  
  
  const createEvent = async (req, res) => {
    try {
  
      const {
        eventName,
        proposeDate1,
        proposeDate2,
        proposeDate3,
        status,
        companyId,
        remark,
        vendorId,
      } = req.body;
  
      const company = await Company.findByPk(companyId);
      if (!company) {
        return res.status(404).json({
          message: 'Company not found.'
        });
      }
  
      const vendor = await Vendor.findByPk(vendorId);
      if (!vendor) {
        return res.status(404).json({
          message: 'Vendor not found.'
        });
      }
  
      const newEvent = await Event.create({
        eventName,
        proposeDate1: convertToAsiaTimezone(proposeDate1),
        proposeDate2: convertToAsiaTimezone(proposeDate2),
        proposeDate3: convertToAsiaTimezone(proposeDate3),
        status,
        remark,
        company_id: companyId,
        vendor_id: vendorId
      });
  
      return res.status(201).json({
        success: true,
        message: "Created Data Event Successfully",
        dataEvent: newEvent,
      })
    } catch (error) {
      console.log(error);
    }
  }
  
  const updateEvent = async (req, res) => {
  
    try {
  
      const {
        id
      } = req.params
  
      const event = await Event.findByPk(id);
      if (!event) {
        return res.status(404).json({
          message: 'Event not found.'
        });
      }
  
      const {
        eventName,
        proposeDate1,
        proposeDate2,
        proposeDate3,
        status,
        companyId,
        remark,
        vendorId,
      } = req.body;
  
  
      const vendor = await Vendor.findByPk(vendorId);
      if (!vendor) {
        console.log('vendorId', vendorId);
        return res.status(404).json({
          message: 'Vendor not found.'
        });
      }
  
      const company = await Company.findByPk(companyId);
      if (!company) {
        return res.status(404).json({
          message: 'Company not found.'
        });
      }
  
      await Event.update({
        eventName,
        proposeDate1: convertToAsiaTimezone(proposeDate1),
        proposeDate2: convertToAsiaTimezone(proposeDate2),
        proposeDate3: convertToAsiaTimezone(proposeDate3),
        status,
        remark,
        company_id: companyId,
        vendor_id: vendorId
      }, {
        where: {
          id: id
        }
      });
  
      return res.status(201).json({
        success: true,
        message: "Updated Data Event Successfully",
  
      })
    } catch (error) {
      console.log(error);
    }
  }
  const getAllEvent = async (req, res) => {
    try {
      const findAllEvent = await Event.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        },
      });
      res.status(200).json({
        success: true,
        message: "Data Event Successfully",
        dataEvent: findAllEvent
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Data Company Failed",
        error
      });
    }
  }
  
  
  const getByIdEvent = async (req, res) => {
    try {
      const id = req.params.id;
      const findOneEvent = await Event.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updateAt"]
        },
      });
  
      if (!findOneEvent) {
        return res.status(404).json({
          succes: false,
          message: "Data Event Not Found",
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Data Event Retrieved",
        dataEvent: findOneEvent,
      });
    } catch (error) {
      return res.status(400).json({
        succes: false,
        message: error,
      });
    }
  };
  
  const dataAllEvent = async (req, res) => {
    try {
      const findAllEvent = await Event.findAll({
        attributes: {
          exclude: ["createdAt", "updatedAt"]
        },
        include: [{
          model: Vendor,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }, ],
  
      });
      res.status(200).json({
        success: true,
        message: "Data Event Successfully",
        dataEvent: findAllEvent
      })
    } catch (error) {
      return res.status(500).json({
        success: false,
        message: "Data Company Failed",
        error
      });
    }
  }
  
  
  const dataEventById = async (req, res) => {
    try {
      const id = req.params.id;
      const findOneEvent = await Event.findByPk(id, {
        attributes: {
          exclude: ["createdAt", "updateAt"]
        },
        include: [{
          model: Vendor,
          attributes: {
            exclude: ['createdAt', 'updatedAt']
          }
        }, ],
      });
  
      if (!findOneEvent) {
        return res.status(404).json({
          succes: false,
          message: "Data Event Not Found",
        });
      }
  
      return res.status(200).json({
        success: true,
        message: "Data Event Retrieved",
        dataEvent: findOneEvent,
      });
    } catch (error) {
      return res.status(400).json({
        succes: false,
        message: error,
      });
    }
  };
  
  
  const deleteEvent = async (req, res) => {
    try {
        const {id} = req.params;
        const destroyVendor = await Event.findByPk(id);
        if(!destroyVendor) {
            return res.status(404).json({
                success: false,
                message: "Data Event Not Found"
            })
        }
  
        await Event.destroy({
           where: {id: id}
        });
  
        return res.status(200).json({
            success: true,
            message: "Data Event Success Delete"
        })
    } catch (error) {
        
        return res.status(500).json({
            success: false,
            message: "Delete Data Event Failed",
            error
        })
    }
  }
  
  
  module.exports = {
    createEvent,
    getAllEvent,
    dataAllEvent,
    getByIdEvent,
    dataEventById,
    updateEvent,
    deleteEvent
  }
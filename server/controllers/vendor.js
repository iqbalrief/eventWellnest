const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")

const {
  Vendor
} = require('../models');


const signUp = async (req, res) => {
  try {
    const {
      username,
      lastname,
      email,
      password,
    } = req.body


    const newVendor = await Vendor.create({
      username,
      lastname,
      email,
      password,
    })

    return res.status(201).json({
      success: true,
      message: "Created Data Vendor Successfully",
      dataVendor: newVendor,
    });
  } catch (error) {
    console.log(error)
  }
}

const signIn = async (req, res) => {

  try {
    const {
      email,
      password
    } = req.body;
    const vendor = await Vendor.findOne({
      where: {
        email
      },
    });

    if (!vendor || !bcrypt.compareSync(password, vendor.password)) {
      return res.status(401).json({
        error: 'Kredensial Tidak Valid'
      });
    }

    const token = jwt.sign({
        id: vendor.id,
        email: vendor.email
      },
      process.env.JWT_SECRETKEY, {
        expiresIn: '1h',
      }
    );

    return res.status(201).json({
      accessToken: token,
      dataUser: {
        id: vendor.id,
        username: vendor.username,
        type: vendor.type,

      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Server Internal Error'
    });
  }
};

const getAllVendor = async (req, res) => {
  try {
    const findAllVendor = await Vendor.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },

    });
    res.status(200).json({
      success: true,
      message: "Data Vendor Successfully",
      dataVendor: findAllVendor
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Data Vendor Failed",
      error
    });
  }
}

const getByIdVendor = async (req, res) => {
  try {
    const id = req.params.id;
    const findOneVendor = await Vendor.findByPk(id, {
      attributes: {
        exclude: ["createdAt", "updateAt"]
      },
    });

    if (!findOneVendor) {
      return res.status(404).json({
        succes: false,
        message: "Data Event Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data Event Retrieved",
      dataVendor: findOneVendor,
    });
  } catch (error) {
    return res.status(400).json({
      succes: false,
      message: error,
    });
  }
};

const updateVendor = async (req, res) => {

  try {

    const {
      id
    } = req.params
    const {
      username,
      lastname,
      email,
      password,
      vendorName

    } = req.body;

    const vendor = await Vendor.findByPk(id);
    if (!vendor) {

      return res.status(404).json({
        message: 'Vendor not found.'
      });
    }

    await Vendor.update({
      username,
      lastname,
      email,
      password,
      vendorName
    }, {
      where: {
        id: id
      }
    });

    return res.status(201).json({
      success: true,
      message: "Updated Data Vendor Successfully",

    })
  } catch (error) {
    console.log(error);
  }
}

const deleteVendor = async (req, res) => {
  try {
    const {
      id
    } = req.params;
    const destroyVendor = await Vendor.findByPk(id);
    if (!destroyVendor) {
      return res.status(404).json({
        success: false,
        message: "Data Vendor Not Found"
      })
    }

    await Vendor.destroy({
      where: {
        id: id
      }
    });

    return res.status(200).json({
      success: true,
      message: "Data Data Vendor Success Delete"
    })
  } catch (error) {

    return res.status(500).json({
      success: false,
      message: "Delete Data Vendor Failed",
      error
    })
  }
}




module.exports = {
  signIn,
  signUp,
  getAllVendor,
  getByIdVendor,
  updateVendor,
  deleteVendor
}
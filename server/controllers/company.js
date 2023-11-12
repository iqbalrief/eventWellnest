const bcrypt = require("bcrypt")
const jwt = require("jsonwebtoken")
const {
  Company,
  Event,
  Vendor
} = require('../models');
const {
  convertToAsiaTimezone
} = require('../helper/converterZone');


const signUp = async (req, res) => {
  try {
    const {
      username,
      lastname,
      email,
      password,
      vendorName
    } = req.body


    const newCompany = await Company.create({
      username,
      lastname,
      email,
      password,
      vendorName
    })

    return res.status(201).json({
      success: true,
      message: "Created Data Company Successfully",
      dataCompany: newCompany,
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
    const company = await Company.findOne({
      where: {
        email
      },
    });

    if (!company || !bcrypt.compareSync(password, company.password)) {
      return res.status(401).json({
        error: 'Kredensial Tidak Valid'
      });
    }


    const token = jwt.sign({
        id: company.id,
        email: company.email

      },
      process.env.JWT_SECRETKEY, {
        expiresIn: '1h',
      }
    );

    return res.status(201).json({
      accessToken: token,
      dataUser: {
        id: company.id,
        username: company.username,
      },
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: 'Terjadi kesalahan pada server.'
    });
  }
};

const getAllCompany = async (req, res) => {
  try {
    const findAllCompany = await Company.findAll({
      attributes: {
        exclude: ["createdAt", "updatedAt"]
      },
    });
  
    res.status(200).json({
      success: true,
      message: "Data Company Successfully",
      dataCompany: findAllCompany
    })
  } catch (error) {
    console.log(error);
    // return res.status(500).json({
    //   success: false,
    //   message: "Data Company Failed",
    //   error
    // });
  }
}

const getByIdCompany = async (req, res) => {
  try {
    const id = req.params.id;
    const findOneCompany = await Company.findByPk(id, {
      attributes: { exclude: ["createdAt", "updateAt"] }, 
    });

    if (!findOneCompany) {
      return res.status(404).json({
        succes: false,
        message: "Data Company Not Found",
      });
    }

    return res.status(200).json({
      success: true,
      message: "Data Event Retrieved",
      dataCompany: findOneCompany,
    });
  } catch (error) {
    return res.status(400).json({
      succes: false,
      message: error,
    });
  }
};

const updateCompany = async (req, res) => {

  try {
    
    const {id} = req.params
    const {
      username,
      lastname,
      email,
      password,
      companyName
      
    } = req.body;

    const company = await Company.findByPk(id);
    if (!company) {
     
      return res.status(404).json({
        message: 'Company not found.'
      });
    }

    await Company.update({
      username,
      lastname,
      email,
      password,
      companyName
    }, {
      where: {id: id}
    });

    return res.status(201).json({
      success: true,
      message: "Updated Data Vendor Successfully",
     
    })
  } catch (error) {
    console.log(error);
  }
}

const deleteCompany = async (req, res) => {
  try {
      const {id} = req.params;
      const destroyCompany = await Company.findByPk(id);
      if(!destroyCompany) {
          return res.status(404).json({
              success: false,
              message: "Data Company Not Found"
          })
      }

      await Company.destroy({
         where: {id: id}
      });

      return res.status(200).json({
          success: true,
          message: "Data Company Success Delete"
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
  signUp,
  signIn,
  getAllCompany,
  getByIdCompany,
  updateCompany,
  deleteCompany
}
const jwt = require('jsonwebtoken');
const {
  Company,
  Vendor
} = require('../models');

const verifyToken = async (req, res, next) => {
  try {
    let token = req.headers['authorization'];
    if (!token) {
      return res.status(401).send({
        message: 'No tokens are provided.'
      });
    }
    const decoded = jwt.verify(token, process.env.JWT_SECRETKEY);
    req.userId = decoded.id;
    next();
  } catch (err) {
    res.status(500).send({
      auth: false,
      message: 'Failed verification Token.'
    });
  }
};



module.exports = {
  verifyToken,
};
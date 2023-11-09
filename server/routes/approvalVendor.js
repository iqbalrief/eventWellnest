const express = require('express');
const router = express.Router();
const authToken = require("../middlewares")
const indexCtrl = require("../controllers/index");


router.post("/", authToken.verifyToken, indexCtrl.approvalVendorCtrl.ConfirmByVendors);
router.put("/:id", authToken.verifyToken, indexCtrl.approvalVendorCtrl.updateByVendor);
router.get("/", authToken.verifyToken, indexCtrl.approvalVendorCtrl.getAllByVendor);
router.get("/:id", authToken.verifyToken, indexCtrl.approvalVendorCtrl.getIdByVendor);
router.delete("/:id", authToken.verifyToken, indexCtrl.approvalVendorCtrl.deleteByVendor);






module.exports = router;
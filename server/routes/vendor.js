
const express = require('express');
const router = express.Router();
const authToken = require("../middlewares")
const indexCtrl = require("../controllers/index");


router.post("/signIn", indexCtrl.vendorCtrl.signIn);
router.post("/signUp", indexCtrl.vendorCtrl.signUp);
router.get("/", authToken.verifyToken, indexCtrl.vendorCtrl.getAllVendor);
router.get("/:id", authToken.verifyToken, indexCtrl.vendorCtrl.getAllVendor);
router.put("/:id", authToken.verifyToken, indexCtrl.vendorCtrl.updateVendor);
router.delete("/:id", authToken.verifyToken, indexCtrl.vendorCtrl.deleteVendor);













module.exports = router;
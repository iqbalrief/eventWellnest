const express = require('express');
const router = express.Router();
const companyRouter = require("./company");
const vendorRouter = require("./vendor");
const eventRouter = require("./event");
const approveVendorRouter = require('./approvalVendor');



router.use("/company", companyRouter);
router.use("/vendor", vendorRouter);
router.use("/event", eventRouter);
router.use("/approve", approveVendorRouter);










module.exports = router;
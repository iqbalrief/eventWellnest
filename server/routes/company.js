const express = require('express');
const router = express.Router();
const authToken = require("../middlewares")
const indexCtrl = require("../controllers/index");

router.post("/signIn", indexCtrl.companyCtrl.signIn);
router.post("/signUp", indexCtrl.companyCtrl.signUp);
router.get("/", authToken.verifyToken, indexCtrl.companyCtrl.getAllCompany);
router.get("/:id", authToken.verifyToken, indexCtrl.companyCtrl.getByIdCompany);
router.put("/:id", authToken.verifyToken, indexCtrl.companyCtrl.updateCompany);
router.delete("/:id", authToken.verifyToken, indexCtrl.companyCtrl.deleteCompany);







module.exports = router;
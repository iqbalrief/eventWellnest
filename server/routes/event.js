const express = require('express');
const router = express.Router();
const authToken = require("../middlewares")
const indexCtrl = require("../controllers/index");

router.post("/create-event", authToken.verifyToken, indexCtrl.eventCtrl.createEvent);
router.get("/", authToken.verifyToken, indexCtrl.eventCtrl.getAllEvent);
router.get("/:id", authToken.verifyToken, indexCtrl.eventCtrl.getByIdEvent);

router.put("/:id", authToken.verifyToken, indexCtrl.eventCtrl.updateEvent);
router.delete("/:id", authToken.verifyToken, indexCtrl.eventCtrl.deleteEvent);








module.exports = router;
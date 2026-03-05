const express = require("express");
const router = express.Router();
const { handleMessage } = require("../controllers/botController");

router.post("/whatsapp-bot", handleMessage);

module.exports = router;
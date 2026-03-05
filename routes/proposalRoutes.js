const express = require("express");
const router = express.Router();
const { createProposal } = require("../controllers/proposalController");

router.post("/generate-proposal", createProposal);

module.exports = router;
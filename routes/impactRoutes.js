const express = require("express");
const router = express.Router();
const { createImpactReport } = require("../controllers/impactController");

router.post("/impact-report", createImpactReport);

module.exports = router;
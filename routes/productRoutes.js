const express = require("express");
const router = express.Router();
const { createProduct } = require("../controllers/productController");

router.post("/add-product", createProduct);

module.exports = router;
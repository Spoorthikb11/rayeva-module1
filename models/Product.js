const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: String,
  description: String,
  material: String,
  primary_category: String,
  sub_category: String,
  seo_tags: [String],
  sustainability_filters: [String]
}, { timestamps: true });

module.exports = mongoose.model("Product", productSchema);
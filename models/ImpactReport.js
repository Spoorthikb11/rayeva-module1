const mongoose = require("mongoose");

const impactSchema = new mongoose.Schema({
  product: String,
  quantity: Number,
  plastic_saved_grams: Number,
  carbon_avoided_kg: Number,
  local_sourcing: String,
  impact_statement: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("ImpactReport", impactSchema);
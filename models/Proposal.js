const mongoose = require("mongoose");

const proposalSchema = new mongoose.Schema({
  company_name: String,
  industry: String,
  budget: Number,
  recommended_products: Array,
  budget_breakdown: Array,
  total_estimated_cost: Number,
  impact_summary: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Proposal", proposalSchema);
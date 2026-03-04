const mongoose = require("mongoose");

const logSchema = new mongoose.Schema({
  product_name: String,
  request_data: Object,
  ai_response: Object,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Log", logSchema);
const mongoose = require("mongoose");

const conversationSchema = new mongoose.Schema({
  user_message: String,
  bot_response: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Conversation", conversationSchema);
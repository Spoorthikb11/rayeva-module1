const Conversation = require("../models/Conversation");
const generateBotResponse = require("../services/botService");

exports.handleMessage = async (req, res) => {

  try {

    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ message: "Message required" });
    }

    const response = generateBotResponse(message);

    const log = await Conversation.create({
      user_message: message,
      bot_response: response
    });

    res.json({
      user_message: message,
      bot_response: response
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};
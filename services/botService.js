const generateBotResponse = (message) => {

  const msg = message.toLowerCase();

  if (msg.includes("order")) {
    return "Your order is currently being processed and will be shipped soon.";
  }

  if (msg.includes("return")) {
    return "Our return policy allows returns within 7 days of delivery.";
  }

  if (msg.includes("refund") || msg.includes("complaint")) {
    return "Your request has been escalated to a support agent.";
  }

  return "Hello! How can I assist you today?";
};

module.exports = generateBotResponse;
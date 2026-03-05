const ImpactReport = require("../models/ImpactReport");
const generateImpactReport = require("../services/impactService");

exports.createImpactReport = async (req, res) => {

  try {

    const { product, quantity } = req.body;

    if (!product || !quantity) {
      return res.status(400).json({ message: "Product and quantity required" });
    }

    const impact = await generateImpactReport(req.body);

    const report = await ImpactReport.create({
      product,
      quantity,
      plastic_saved_grams: impact.plastic_saved_grams,
      carbon_avoided_kg: impact.carbon_avoided_kg,
      local_sourcing: impact.local_sourcing,
      impact_statement: impact.impact_statement
    });

    res.status(201).json(report);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }

};
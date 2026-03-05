const Proposal = require("../models/Proposal");
const Log = require("../models/Log");
const generateProposal = require("../services/proposalService");

exports.createProposal = async (req, res) => {
  try {
    const { company_name, industry, budget } = req.body;

    if (!company_name || !industry || !budget) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const aiResult = await generateProposal(req.body);

    const proposal = await Proposal.create({
      company_name,
      industry,
      budget,
      recommended_products: aiResult.recommended_products,
      budget_breakdown: aiResult.budget_breakdown,
      total_estimated_cost: aiResult.total_estimated_cost,
      impact_summary: aiResult.impact_summary
    });

    await Log.create({
      product_name: company_name,
      request_data: req.body,
      ai_response: aiResult
    });

    res.status(201).json(proposal);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
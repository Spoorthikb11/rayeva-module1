const Log = require("../models/Log");
const Product = require("../models/Product");
const generateCategory = require("../services/aiService");

exports.createProduct = async (req, res) => {
  try {

    const { name, description, material } = req.body;

    if (!name || !description || !material) {
      return res.status(400).json({ message: "All fields required" });
    }

    const aiResult = await generateCategory(req.body);
    await Log.create({
  product_name: name,
  request_data: req.body,
  ai_response: aiResult
});

    const newProduct = new Product({
      name,
      description,
      material,
      primary_category: aiResult.primary_category,
      sub_category: aiResult.sub_category,
      seo_tags: aiResult.seo_tags,
      sustainability_filters: aiResult.sustainability_filters
    });

    await newProduct.save();

    res.status(201).json(newProduct);

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
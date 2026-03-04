async function generateCategory(data) {
  return {
    primary_category: "Packaging",
    sub_category: "Food Containers",
    seo_tags: [
      "bamboo cup",
      "eco friendly cup",
      "plastic free cup",
      "reusable mug",
      "biodegradable cup"
    ],
    sustainability_filters: [
      "plastic-free",
      "biodegradable",
      "reusable",
      "eco-friendly"
    ]
  };
}

module.exports = generateCategory;
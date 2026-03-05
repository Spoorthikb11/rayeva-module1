const generateProposal = async (data) => {
  const { budget } = data;

  let products = [
    { name: "Reusable Bamboo Bottles", price: 500 },
    { name: "Recycled Paper Notebooks", price: 200 },
    { name: "Compostable Packaging Kits", price: 300 }
  ];

  let allocationPerProduct = Math.floor(budget / products.length);

  let breakdown = products.map(product => ({
    product_name: product.name,
    allocated_budget: allocationPerProduct,
    estimated_units: Math.floor(allocationPerProduct / product.price)
  }));

  return {
    recommended_products: products.map(p => p.name),
    budget_breakdown: breakdown,
    total_estimated_cost: allocationPerProduct * products.length,
    impact_summary:
      "This proposal reduces plastic usage and promotes sustainable corporate sourcing."
  };
};

module.exports = generateProposal;
const generateImpactReport = async (data) => {

  const { product, quantity } = data;

  let plasticPerUnit = 50;
  let carbonPerUnit = 0.12;

  let plastic_saved = quantity * plasticPerUnit;
  let carbon_saved = quantity * carbonPerUnit;

  return {
    plastic_saved_grams: plastic_saved,
    carbon_avoided_kg: carbon_saved,
    local_sourcing: "Supports local eco-friendly suppliers",
    impact_statement:
      `This order saved ${plastic_saved} grams of plastic and avoided ${carbon_saved} kg of carbon emissions.`
  };
};

module.exports = generateImpactReport;
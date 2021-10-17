const companies = require("./companies.json");
const items = require("./items.json");

module.exports = () => {
  const data = { 
    companies,
    items
  };

  return data;
}

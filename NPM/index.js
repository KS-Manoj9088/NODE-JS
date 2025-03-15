const lodash = require("lodash");

const names = ["thunder", "clam", "ricky"];

const capital_Names = lodash.map(names, lodash.capitalize);

console.log(capital_Names);
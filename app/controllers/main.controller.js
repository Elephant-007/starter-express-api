const fs = require("fs");
const { ethers } = require("ethers");
require("dotenv");

const methods = {
  index: (req, res) => {
    res.render("index");
  },
};
module.exports = methods;

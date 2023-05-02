const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    url: {
      type: String,
    },
    text: {
      type: String,
    },
    image: {
      type: String,
    },
    parent: {
      type: String,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model("Asset", Schema);
module.exports = Model;

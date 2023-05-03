const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    question: {
      type: String,
    },
    answer: {
      type: String,
    },
    parent: {
      type: String,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model("Bid", Schema);
module.exports = Model;

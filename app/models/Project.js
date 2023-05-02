const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    url: {
      type: String,
    },
    github: {
      type: String,
    },
    builder: {
      type: String,
    },
    stack: {
      type: String,
    },
    description: {
      type: String,
    },
    image: {
      type: String,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model("Project", Schema);
module.exports = Model;

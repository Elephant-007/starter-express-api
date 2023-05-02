const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    image: {
      type: String,
    },
    name: {
      type: String,
    },
    email: {
      type: String,
    },
    address: {
      type: String,
    },
    phone: {
      type: String,
    },
    linkedin: {
      type: String,
    },
    github: {
      type: String,
    },
    twitter: {
      type: String,
    },
    portfolio: {
      type: String,
    },
    description: {
      type: String,
    },
    parent: {
      type: String,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model("Address", Schema);
module.exports = Model;

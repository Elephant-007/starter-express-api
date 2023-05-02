const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
  { timestamps: true }
);

const Model = mongoose.model("User", Schema);
module.exports = Model;

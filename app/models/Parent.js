const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    text: {
      type: String,
    },
    type: {
      type: String,
      default: "interview",
    },
  },
  { timestamps: true }
);

const ParentModal = mongoose.model("Parent", Schema);
module.exports = ParentModal;

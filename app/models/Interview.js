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

const InterviewModal = mongoose.model("Interview", Schema);
module.exports = InterviewModal;

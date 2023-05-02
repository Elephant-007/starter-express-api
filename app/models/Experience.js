const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    duration: {
      type: String,
    },
    position: {
      type: String,
    },
    role: {
      type: String,
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);

const ExperienceModel = mongoose.model("Experience", Schema);
module.exports = ExperienceModel;

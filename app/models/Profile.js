const mongoose = require("mongoose");

const Schema = new mongoose.Schema(
  {
    title: {
      type: String,
    },
    text: {
      type: String,
    },
    icon: {
      type: String,
    },
    type: {
      type: String,
      enum: ["profile", "background", "secret"],
      default: "profile", // set default value to 'active'
    },
  },
  { timestamps: true }
);

const ProfileModel = mongoose.model("Profile", Schema);
module.exports = ProfileModel;

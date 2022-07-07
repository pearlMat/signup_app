const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      trim: true,
      min: 3,
      max: 160,
      required: true,
    },

    body: {
      type: {},
      required: true,
      min: 200,
      max: 2000000,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Blog", blogSchema);

const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
      maxLength: 150,
    },
    content: {
      type: String,
      required: true,
      maxLength: 500,
    },
    author: {
      type: String,
      required: true,
      maxLength: 20,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("post", PostSchema);

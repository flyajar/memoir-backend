const mongoose = require("mongoose");

const MemorySchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  published_date: {
    type: Date,
    required: true,
  },
  updated_date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = Memory = mongoose.model("memory", MemorySchema);

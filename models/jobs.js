const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  company: { type: String, required: false },
  location: { type: String, required: false },
  description: { type: String, required: false },
  url: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const jobSchema = new Schema({
  title: { type: String, required: true },
  location: { type: String, required: false },
  description: { type: String, required: false },
  listingUrl: { type: String, required: false },
  remote: { type: Boolean, required: false },
  notes: { type: String, required: false },
  company: { type: String, required: false },
  companyUrl: { type: String, required: false },
  companyLogo: { type: String, required: false },
  date: { type: Date, default: Date.now }
});

const Jobs = mongoose.model("Jobs", jobSchema);

module.exports = Jobs;

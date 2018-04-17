const mongoose = require("mongoose")
const Schema = mongoose.Schema

const jobListingSchema = new Schema({
  jobkey: { type: String, required: false },
  title: { type: String, required: true },
  location: { type: String, required: false },
  description: { type: String, required: false },
  listingUrl: { type: String, required: false },
  company: { type: String, required: false },
  formattedRelativeTime: { type: String, required: false },
  companyLogo: { type: String, required: false, default: '/good-job.png' },
  date: { type: Date, default: Date.now }
})

const JobListings = mongoose.model("JobListings", jobListingSchema)

module.exports = JobListings

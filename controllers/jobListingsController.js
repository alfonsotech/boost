const db = require("../models")

module.exports = {
  findAll: function(req, res) {
    db.JobListings
      .find({})
      .exec( (err, docs) => {
        // console.log('docs', docs)
        res.json(docs)
      })
  },
  findById: function(req, res) {
    db.JobListings
      .findById(req.params.id)
      .then(dbJobListings => res.json(dbJobListings))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    const job = {
      jobkey: req.body.jobkey
      title: req.body.title,
      location: req.body.location,
      description: req.body.description,
      listingUrl: req.body.listingUrl,
      company: req.body.company,
      formattedRelativeTime: ''
    }
    db.JobListings
      .create(job)
      .then(dbJobListings => res.json(dbJobListings))
      .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    db.JobListings
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbJobListings => {
        res.json(dbJobListings)
      })
      .catch(err => res.status(422).json(err))
  },
  remove: function(req, res) {
    db.JobListings
      .findById({ _id: req.params.id })
      .then(dbJobListings => dbJobListings.remove())
      .then(dbJobListings => res.json(dbJobListings))
      .catch(err => res.status(422).json(err))
  }
}

const db = require("../models")

module.exports = {
  findAll: function(req, res) {
    db.Jobs
      .find({})
      .exec( (err, docs) => {
        // console.log('docs', docs)
        res.json(docs)
      })
  },
  findDead: function(req, res) {
    db.Jobs
      .find({})
      .sort('jobState', 'rejection')
      .exec( (err, docs) => {
        // console.log('docs', docs)
        res.json(docs)
      })
  },
  findById: function(req, res) {
    db.Jobs
      .findById(req.params.id)
      .then(dbJobs => res.json(dbJobs))
      .catch(err => res.status(422).json(err))
  },
  create: function(req, res) {
    const job = {
      title: req.body.title,
      location: req.body.location,
      description: req.body.description,
      listingUrl: req.body.listingUrl,
      // jobState: req.body.jobState,
      notes: req.body.notes,
      company: req.body.company,
      companyUrl: req.body.companyUrl,
      // companyLogo: req.body.companyLogo
    }
    db.Jobs
      .create(job)
      .then(dbJobs => res.json(dbJobs))
      .catch(err => res.status(422).json(err))
  },
  update: function(req, res) {
    db.Jobs
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbJobs => {
        res.json(dbJobs)
      })
      .catch(err => res.status(422).json(err))
  },
  remove: function(req, res) {
    db.Jobs
      .findById({ _id: req.params.id })
      .then(dbJobs => dbJobs.remove())
      .then(dbJobs => res.json(dbJobs))
      .catch(err => res.status(422).json(err))
  }
}

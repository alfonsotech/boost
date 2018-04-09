const db = require("../models")

module.exports = {
  findAll: function(req, res) {
    db.Jobs
      .find({})
      .sort('upvotes')
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
      company: req.body.company,
      location: req.body.location,
      description: req.body.description,
      url: req.body.url
    }
    console.log('job>>>>>>>>', job);
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

const router = require("express").Router()
const jobsController = require("../../controllers/jobListingsController")

// Matches with "/api/jobs"
router.route("/")
  .get(jobListingsController.findAll)
  .post(jobListingsController.create)

// //Get trending Topics
// router.route("/trending")
//   .get(jobListingsController.findTrending)
// //Get new Topics
// router.route("/new")
//     .get(jobListingsController.findNew)
//
// //Get by Path className
// router.route('/:path')
//   .get(jobListingsController.findByPath)

// Matches with "/api/jobss/:id"
router
  .route("/:id")
  .get(jobListingsController.findById)
  .put(jobListingsController.update)
  .delete(jobListingsController.remove)

module.exports = router

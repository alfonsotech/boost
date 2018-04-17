const router = require("express").Router()
const jobsController = require("../../controllers/jobsController")

// Matches with "/api/jobs"
router.route("/")
  .get(jobsController.findAll)
  .post(jobsController.create)

// //Get trending Topics
// router.route("/trending")
//   .get(jobsController.findTrending)
// //Get new Topics
// router.route("/new")
//     .get(jobsController.findNew)
//
// //Get by Path className
// router.route('/:path')
//   .get(jobsController.findByPath)

// Matches with "/api/jobss/:id"
router
  .route("/:id")
  .get(jobsController.findById)
  .put(jobsController.update)
  .delete(jobsController.remove)

module.exports = router

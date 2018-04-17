const router = require("express").Router()
const jobsRoutes = require("./jobs")
const jobListingsRoutes = require("./joblistings")
// const pathsRoutes = require("./paths")

router.use("/jobs", jobsRoutes)
router.use("/joblistings", jobListingsRoutes)

module.exports = router

const router = require("express").Router()
const jobsRoutes = require("./jobs")
// const pathsRoutes = require("./paths")

router.use("/jobs", jobsRoutes)
// router.use("/paths", pathsRoutes)

module.exports = router

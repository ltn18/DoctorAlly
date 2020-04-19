const router = require("express").Router()

router.use("/helpRequest", require("./helpRequest"))

module.exports = router
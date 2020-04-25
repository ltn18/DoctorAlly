const router = require("express").Router()

router.use("/helpRequest", require("./helpRequest"))
router.use("/volunteer", require("./volunteer"))

module.exports = router
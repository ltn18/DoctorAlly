const router = require("express").Router();

router.use("/helpRequest", require("./helpRequest"))
router.use("/volunteer", require("./volunteer"))
router.use("/auth",require("./auth"))
router.use('/me', require('./me'));

module.exports = router;

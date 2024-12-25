const express = require("express");
const powerBiAPI = require("../controllers/powerBi-controller");
const router = express.Router();

router.route("/getAccessToken").post(powerBiAPI.accessToken);
router.route("/generateEmbedToken").post(powerBiAPI.embbedToken);

module.exports = router;
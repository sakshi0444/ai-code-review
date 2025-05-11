const express = require('express');
const aiController = require("../controllers/ai.controller");

const router = express.Router();

router.post("/get-review", aiController.getReview);
router.post("/generate-logo", aiController.generateLogo);

module.exports = router;


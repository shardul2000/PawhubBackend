const express = require("express");
const router = express.Router();
const{ sendTexts, getTexts } = require("../controllers/texts")

router.post("/sendTexts", sendTexts);
router.get("/getTexts/:convoId", getTexts);

module.exports= router;
const express = require("express");
const router = express.Router();
const{ sendMessage, getMessages } = require("../controllers/conversations")

router.post("/sendMessage", sendMessage);
router.get("/getMessages/:userId", getMessages);

module.exports= router;
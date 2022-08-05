const express = require("express");
const router = express.Router();
const{ startConversation, getConversations } = require("../controllers/conversations")

router.post("/startConversation", startConversation);
router.get("/getConversations/:userId", getConversations);

module.exports= router;
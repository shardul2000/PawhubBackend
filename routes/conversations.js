const express = require("express");
const router = express.Router();
const{ startConversation, getConversation, getAllConversations } = require("../controllers/conversations")

router.post("/startConversation", startConversation);
router.get("/getAllConversations/:userId", getAllConversations);
router.get("/getConversation/:firstUserId/:secondUserId", getConversation);

module.exports= router;
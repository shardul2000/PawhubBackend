// Author: Howard Luan

const express = require('express');
const router = express.Router();
const follows = require('../controllers/follow');

// Get Reports: 
router.get('/getFollowers/:id', follows.getFollowers);

// Add report:
router.post('/addFollower', follows.addFollower);

// Delete Follower:
router.post('/deleteFollower/', follows.delFollower);

module.exports = router;
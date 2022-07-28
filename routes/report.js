// Author: Howard Luan

const express = require('express');
const router = express.Router();
const reports = require('../controllers/report');
const { middleware } = require("../middleware/private");

// Get Reports: 
router.get('/getReport', reports.getReports);

// Add report:
router.post('/addReport', reports.addReport);

// Delete report:
router.delete('/deleteReport/:id', reports.delReport);

// Delete listing:
router.delete('/deleteListing/:id', reports.delListing);

// Delete profile:
router.delete('/deleteProfile/:id', reports.delProfile);

// Delete identical
router.delete('/deleteIdentical/:id', reports.delIdentical);

module.exports = router;
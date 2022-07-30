/*

Author of this file: Shardul Kavale B00798007


*/
const express = require('express');
const router = express.Router();
const { middleware } = require('../middleware/private');
const {
	makeListing,
	getAllListings,
	getListing,
	getListingByLocation,
} = require('../controllers/market');

//middleware will check jwt token for every request
router.post('/makeListing', makeListing);
router.get('/getAllListings', getAllListings);
router.get('/getListing/:id', getListing);
router.get('/getListingByLocation/:location', getListingByLocation);
module.exports = router;

// Author: Rebecca Dass
// Co-Author: Shardul Kavale

const express = require('express');
const router = express.Router();
const { middleware } = require('../middleware/private');
const {
	makeService,
	getAllServices,
	getService,
	getServiceByLocation,
} = require('../controllers/services');

//middleware will check jwt token for every request
router.post('/makeService', middleware, makeService);
router.get('/getAllServices', getAllServices);
router.get('/getService/:id', getService);
router.get('/getServiceByLocation/:location', getServiceByLocation);

module.exports = router;

// Author: Rebecca Dass
// Co-Author: Shardul Kavale

const { serviceListing } = require('../models/serviceListingSchema');

const makeService = async (req, res) => {
	try {
		const newService = new serviceListing({ ...req.body });
		await newService.save();
		res.status(200).send({
			success: true,
			response: 'Service Listing created',
		});
	} catch (e) {
		console.log('Sever Error : ' + e);
		res.status(500).send({
			success: false,
			response: 'Sever Error',
		});
	}
};

const getAllServices = async (req, res) => {
	serviceListing
		.find({})
		.sort({ _id: -1 })
		.then(function (posts) {
			res.status(200).json({
				success: true,
				posts: posts,
			});
		})
		.catch(() => {
			console.log('error:  ' + e);
			res.status(500).json({
				success: false,
				response: 'Something went wrong. Try again later',
			});
		});
};

const getService = async (req, res) => {
	let id = req.params.id;
	serviceListing
		.findOne({ _id: id })
		.then(function (post) {
			res.status(200).json({
				success: true,
				post: post,
			});
		})
		.catch(() => {
			console.log('error:  ' + e);
			res.status(500).json({
				success: false,
				response: 'Something went wrong. Try again later',
			});
		});
};

const getServiceByLocation = async (req, res) => {
	let location = req.params.location;
	serviceListing
		.find({ location: location })
		.then(function (post) {
			res.status(200).json({
				success: true,
				post: post,
			});
		})
		.catch(() => {
			console.log('error:  ' + e);
			res.status(500).json({
				success: false,
				response: 'Something went wrong. Try again later',
			});
		});
};

module.exports = {
	makeService,
	getAllServices,
	getService,
	getServiceByLocation,
};

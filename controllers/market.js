/*

Author of this file: Shardul Kavale B00798007


*/

const { productListing } = require('../models/productListingSchema');

const makeListing = async (req, res) => {
	try {
		const newListing = new productListing({ ...req.body });
		await newListing.save();
		res.status(200).send({
			success: true,
			response: 'Listing created',
		});
	} catch (e) {
		console.log('Sever Error : ' + e);
		res.status(500).send({
			success: false,
			response: 'Sever Error',
		});
	}
};

const getAllListings = async (req, res) => {
	productListing
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

const getListing = async (req, res) => {
	let id = req.params.id;
	productListing
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

const getListingByLocation = async (req, res) => {
	let location = req.params.location;
	productListing
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
	makeListing,
	getAllListings,
	getListing,
	getListingByLocation,
};

// Author: Rebecca Dass
// Co-Author: Shardul Kavale

const mongoose = require('mongoose');

const serviceListingSchema = new mongoose.Schema(
	{
		userId: {
			type: String,
			required: true,
		},
		title: {
			type: String,
			required: true,
		},
		location: {
			type: String,
			required: true,
		},
		price: {
			type: Number,
			required: true,
		},
		serviceType: {
			type: String,
			required: true,
		},
		description: {
			type: String,
		},
		image: {
			type: String,
		},
	},
	{
		timestamps: true,
	}
);

exports.serviceListing = mongoose.model('serviceListing', serviceListingSchema);

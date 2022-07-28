const mongoose = require('mongoose');

const productListingSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:true
    },
    title: {
        type: String,
        required:true
    },
    location: {
        type: String,
        required:true
    },
    price: {
        type: Number,
        required:true
    },
    petType: {
        type: String
    },
    category: {
        type: String,
        required:true
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
},
{
    timestamps: true
});


exports.productListing = mongoose.model("productListings",productListingSchema);

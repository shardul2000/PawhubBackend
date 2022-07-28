//Sarah: Creating schema for favourites
const mongoose = require('mongoose');
const favouriteSchema = new mongoose.Schema({
    clientId: {
        type: String,
        required:true
    },
    listingId: {
        type: String,
        required:true
    },
    listingDescription: {
        type:String
    },
    listingImage: {
        type:String
    },
    listingPoster: {
        type: String
    }
},
{
    timestamps: true
});

//exporting favorutites schema 
exports.Favourite = mongoose.model("Favourite",favouriteSchema);
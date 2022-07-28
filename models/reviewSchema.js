const mongoose = require('mongoose');
const reviewSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:true
    },
    reviewerId: {
        type: String,
        required:true
    },
    review: {
        type:String
    },
    rating: {
        type:Number
    }
},
{
    timestamps: true
});

//exporting favorutites schema 
exports.Review = mongoose.model("Review",reviewSchema);
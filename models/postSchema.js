/*

Author of this file: Shardul Kavale B00798007


*/
const mongoose = require('mongoose');
const postSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:true
    },
    caption: {
        type: String,
        required:true
    },
    image: {
        type:String,
        required: true
    },
},
{
    timestamps: true
});

exports.Post = mongoose.model("posts",postSchema);
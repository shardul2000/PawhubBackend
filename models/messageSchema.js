const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema({
    conversationId: {
        type: String,
        required:true
    },
    sender: {
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

exports.Post = mongoose.model("message",messageSchema);
const mongoose = require("mongoose");

const conversationsSchema = new mongoose.Schema({
  
    senderId: {
        type: String,
        required:true
    },
    receiverId: {
        type: String,
        required:true
    },
    text: {
        type:String,
        required: true
    },
},
{
    timestamps: true
});

exports.Conversations = mongoose.model("conversations",conversationsSchema);
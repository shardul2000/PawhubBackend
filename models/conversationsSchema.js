const mongoose = require("mongoose");

const conversationsSchema = new mongoose.Schema({
  
    member1: {
        type: String,
        required:true
    },
    member2: {
        type: String,
        required:true
    }
},
{
    timestamps: true
});

exports.Conversations = mongoose.model("conversations",conversationsSchema);
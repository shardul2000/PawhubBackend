const mongoose = require("mongoose");

const conversationsSchema = new mongoose.Schema({
  
    members : {
        type: Array,
    },
},
{
    timestamps: true
});

exports.Conversations = mongoose.model("conversations",conversationsSchema);
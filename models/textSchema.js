const mongoose = require('mongoose');
const textSchema = new mongoose.Schema({
    conversationId: {
        type: String,
        required:true
    },
    senderId: {
        type: String,
        required:true
    },
    text: {
        type:String
    }
},
{
    timestamps: true
});

//exporting favorutites schema 
exports.Text = mongoose.model("texts",textSchema);
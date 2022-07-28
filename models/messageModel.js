const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
     senderId : {
          type : String,
          required : true
     },
     senderName : {
          type: String,
          required : true
     },
     reseverId : {
          type: String,
          required : true          
     },
     message : {
     
          
               type: String,
               default : ''
          
                   
     }
},{timestamps : true});

module.exports = mongoose.model('message',messageSchema);
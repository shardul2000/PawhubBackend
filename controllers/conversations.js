
const { Conversations } = require("../models/conversationsSchema")

const startConversation = async(req, res, next) => {
    try{
       const conv = new Conversations({
        members: [req.body.senderId, req.body.receiverId],
       })
       const result= await conv.save();
       res.status(200).json({
          success:true,
          response: result
       })
    }catch(e){
        res.status(500).json(
            {success:false}
        )
    }
}

const getAllConversations = async(req,res,next) => {
    try{
        const conversations = await Conversations.find({
            members: { $in: [req.params.userId] },
        })
        res.status(200).json({
            success:true,
            conversations:conversations
        })
    }catch(e){
        res.status(500).json({
            success:false,
            error: "Server Error " + e
        })
    }
}

const getConversation = async(req,res,next) => {
    try{
        const conversation = await Conversations.findOne({
            members: { $all: [req.params.firstUserId, req.params.secondUserId] },
        })
        res.status(200).json({
            success:true,
            conversations:conversation
        })
    }catch(e){
        res.status(500).json({
            success:false,
            error: "Server Error " + e
        })
    }
}


module.exports = {
    startConversation, getAllConversations, getConversation
}
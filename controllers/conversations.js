
const { Conversations } = require("../models/conversationsSchema")

const startConversation = async(req, res, next) => {

    const data = req.body;

    try{
       const conv = new Conversations(data)
       const result= await conv.save();
       res.status(200).json({
        success:true,
        response:result._id
        })
    }catch(e){
        res.status(500).json(
            {success:false}
        )
    }
}

const getConversations = async(req,res,next) => {
    const userId = req.params.userId
    try{
        const conversations = await Conversations.find({
            $or:[
                {member1:userId},
                {member2:userId}
            ]
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


module.exports = {
    startConversation, getConversations
}
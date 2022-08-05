
const { Conversations } = require("../models/conversationsSchema")

const sendMessage = async(req, res, next) => {

    const data = req.body;

    try{
       const conv = new Conversations(data)
       const result= await conv.save();
       res.status(200).json({
        success:true,
        response:result._id
        })
    }catch(e){
        res.status(500).send(json(
            {success:false}
        ))
    }
}

const getMessages = async(req,res,next) => {
    const userId = req.params.userId
    try{
        const conversations = await Conversations.find({
            $or:[
                {
                    senderId:userId
                },
                {
                    receiverId:userId
                }
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
    sendMessage, getMessages
}
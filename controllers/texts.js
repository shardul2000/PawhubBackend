const { Text } = require("../models/textSchema")

const sendTexts = async(req,res,next) => {
    try{
        const text = new Text(req.body);
        const savedText = await text.save();
        res.status(200).json(savedText)

    }catch(e){
        res.status(200).json({
            success:false,
            error:e
        })
     }    
}


const getTexts = async(req,res,next) => {
    try{
        const texts= await Text.find({
            conversationId:req.params.convoId
        })
        res.status(200).json(texts);
    }catch(e){
        res.status(200).json({
            success:false,
            error:e
        })
    }
}


module.exports = {
    sendTexts, getTexts
}
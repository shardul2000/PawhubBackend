//const User = require('../models/userSchema');
const messageModel = require('../models/messageModel');

const getFriends = async (req, res) => {
     console.log("pls work");
    try{
         const friendGet = await User.find({});
         res.status(200).json({success:true, friends : friendGet})

    }catch (error) {
         res.status(500).json({
              error: {
                   errorMessage :'Internal Sever Error'
              }
         })
    }
}

const messageUploadDB = async (req, res) =>{

     const {
          senderName,
          reseverId,
          message
     } = req.body
     const senderId = req.myId;

     try{
          const insertMessage = await messageModel.create({
               senderId : senderId,
               senderName : senderName,
               reseverId : reseverId,
               message : {
                    text: message,
                    image : ''
               }
          })
          res.status(201).json({
               success : true,
               message: insertMessage
          })

     }catch (error){
          res.status(500).json({
               error: {
                    errorMessage : 'Internal Sever Error'
               }
          })
     }

     console.log(senderId)
     console.log(req.body);

}

const messageGet = async(req,res) => {
     const myId = req.myId;
     const fdId = req.params.id;

     try{
          let getAllMessage = await messageModel.find({})

          getAllMessage = getAllMessage.filter(m=>m.senderId === myId && m.reseverId === fdId || m.reseverId ===  myId && m.senderId === fdId );

          res.status(200).json({
               success: true,
               message: getAllMessage
          })

     }catch (error){
          res.status(500).json({
               error: {
                    errorMessage : 'Internal Server error'
               }
          })

     }

}
module.exports ={getFriends,messageGet,messageUploadDB}
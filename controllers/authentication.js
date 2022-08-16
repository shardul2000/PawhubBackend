/*

Author of this file: Shardul Kavale B00798007


*/

const jwt = require("jsonwebtoken");
const { User } = require("../models/userSchema");
require("dotenv").config();


const register = async(req, res) => {
    
     const {email, fName, lName, pass} = req.body;
     try{
          const user = await User.findOne({email: email});
          if(user){
              return res.json({
               success:false,
               response:"Account already exists"
              })
          }else{
               const newUser = new User({firstName:fName, lastName:lName, email:email,password:pass})
               await newUser.save();
               res.status(200).json({
                    success:true,
                    response:"Account Created! Please Log in."
               })
          }
     } catch(e) {
          console.log("error:  "+e);
          res.status(500).json({
               success:false,
               response:"Something went wrong. Try again later"
          });
     }
     
}




const login = async(req, res) => {
     const { email, pass } = req.body;
     try{
        const user = await User.findOne({email: email});
        if(user){ 
             const match=await user.matchPassword(pass);
             if(match==false){
                    return res.status(403).json({
                         success:false,
                         response: "Incorrect password"
                    });
              }else{ 
                    const obj={}
                    obj.email=user.email;
                    obj.firstName=user.firstName;
                    obj.lastName=user.lastName;
                    obj.location=user.location;
                    obj.id=user._id;
                    const token = jwt.sign(obj, process.env.JWT_KEY, {expiresIn: 3600});
                    return res.status(200).json({
                         success:true,
                         token: token 
                    });
               }    
          }else{
               return res.status(404).json({
                    success:false,
                    response:"User Not Found"
               })
          } 
     }
     catch(e){
          res.send("error  "+e)
     }
}


const checkValid = async(req, res, next)  => {

     res.status(200).json({
          isAuthenticated: true
     })
}

module.exports = {
     register, login, checkValid
}
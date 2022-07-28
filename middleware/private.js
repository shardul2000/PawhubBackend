/*

Author of this file: Shardul Kavale B00798007


*/

const jwt = require("jsonwebtoken");
const { User } = require("../models/userSchema");
exports.middleware = async(req,res,next) => {
    
    let token = req.headers.authorization;
    if (token===false||token===""||token===null){
        let err = new Error('You are not Authenticated!');
        err.status = 401;
        return next(err);
    }

    try{
        
        const decodedToken = jwt.verify(token, process.env.JWT_KEY);
        const user = await User.findById(decodedToken.id)
        if (user===false||user===""||user===null){
            let err = new Error('You are not Authenticated!');
            err.status = 401;
            return next(err);
        }
        next();

    }
    catch{
        let err = new Error('You are not Authenticated!');
        err.status = 401;
        return next(err);
    }

}
/*

Author of this file: Shardul Kavale B00798007


*/

const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required:true
    },
    lastName: {
        type: String,
        required:true
    },
    email: {
        type: String,
        required:true
    },
    password: {
        type: String,
        required:true
    },    
    location: {
        type: String
    },
    pet: {
        type: String
    },
    bio: {
        type: String
    },
    profileImage: {
        type: String
    }
});

userSchema.methods.matchPassword = function (password) {
    if(this.password===password){
        return true;
    }
    else{
        return false;
    }
  
}

exports.User = mongoose.model("user",userSchema);

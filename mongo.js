const mongoose = require('mongoose');
require("dotenv").config();


const connectMongo = async() =>{
    mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true})
    .then(()=> console.log("Connected to Mongo"))
    .catch((err)=>console.log(`Error:  ${err}`));
}

module.exports = connectMongo;
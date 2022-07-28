// Author: Howard Luan

const mongoose = require('mongoose');

const followSchema = new mongoose.Schema({
    userId: {
        type: String,
        required:true
    },
    followId: {
        type: String,
        required:true
    }
});

module.exports = mongoose.model("follow", followSchema);

// Author: Howard Luan

const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema({
    reportType: {
        type: String,
        required:true
    },
    category: {
        type: String,
        required: true
    },
    comment : {
        type: String,
        required: true
    },
    url : {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("report", reportSchema);
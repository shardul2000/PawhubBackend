// Author: Howard Luan

const Report = require('../models/reportSchema');
const { User } = require("../models/userSchema");
const { productListing } = require('../models/productListingSchema')
const { Post } = require("../models/postSchema");

// Get report
const getReports = async (req, res) => {
    const reports = await Report.find();
    try {
        return res.status(200).json({
            message: "Report retrieved",
            success: true,
            reports: reports
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

// Delete report
const delReport = async (req, res) => {
    const val = req.params.id;
    try {
        const report = await Report.find({ '_id': val });
        console.log(report);
        if (!report.length) {
            throw 404
        }
        await Report.findByIdAndDelete(val);
        return res.status(200).json({
            message: "Report Deleted",
            success: true,
        })
    } catch (err) {
        if (err == 404) {
            return res.status(err).json({
                message: "Report not found",
                success: false
            });
        }
        else {
            return res.status(500).json({
                message: "Internal server error",
                success: false
            });
        }
    }
}

// Submit report
const addReport = async (req, res) => {
    const reportType = req.body.reportType;
    const category = req.body.category;
    const comment = req.body.comment;
    const url = req.body.url;
    try {
        const newReport = new Report({
            reportType: reportType,
            category: category,
            comment: comment,
            url: url
        });
        await newReport.save();
        res.status(200).send({
            message: "Report created",
            success: true
        })
    } catch (e) {
        console.log("Sever Error : " + e)
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }

}

// Delete User Profile
const delProfile = async (req, res) => {
    const val = req.params.id;
    try {
        const profile = await User.find({ '_id': val });
        console.log(profile);
        // Delete the profile
        await User.findByIdAndDelete(val);
        // Delete all listing associated with profile
        await productListing.deleteMany({ userId: val });
        // Delete all posts associated with profile
        await Post.deleteMany({ userId: val });
        return res.status(200).json({
            message: "Profile Deleted",
            success: true,
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

// Delete Listing
const delListing = async (req, res) => {
    const val = req.params.id;
    try {
        await productListing.findByIdAndDelete(val);
        return res.status(200).json({
            message: "Listing Deleted",
            success: true,
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

// Delete All Reports with the same profile/listing:
const delIdentical = async (req, res) => {
    const val = req.params.id;
    console.log(val);
    try {
        // Find the Report
        const report = await Report.findOne({ _id: val });
        console.log(report);
        // Get the report url
        const find = report.url;
        console.log(find);
        // Delete all reports with the same url
        await Report.deleteMany({ url: find });
        await productListing.findByIdAndDelete(val);
        return res.status(200).json({
            message: "All reports with the same URL deleted",
            success: true,
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

module.exports = { getReports, addReport, delReport, delListing, delProfile, delIdentical };
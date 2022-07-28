// Author: Howard Luan
// Friend and follow management is identical, just different words.

const Follow = require('../models/followSchema');

// Get Friend List
const getFollowers = async (req, res) => {
    let val = req.params.id;
    const followers = await Follow.find({ userId: val });
    try {
        return res.status(200).json({
            message: "Friend list retrieved",
            success: true,
            followers: followers
        });
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        })
    }
}

// Delete Friend
const delFollower = async (req, res) => {
    const userId = req.body.userId;
    const followId = req.body.followId;
    try {
        await Follow.findOneAndDelete({ userId: userId, followId: followId });
        return res.status(200).json({
            message: "Friend Deleted",
            success: true,
        })
    } catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            success: false
        });
    }
}

// Add Friend
const addFollower = async (req, res) => {
    const userId = req.body.userId;
    const followId = req.body.followId;
    const follow = await Follow.find({ userId: userId, followId: followId });
    console.log(follow + " " + follow.length);
    try {
        if (follow.length != 0) {
            throw 409
        }
        const newFollow = new Follow({
            userId: userId,
            followId: followId
        });
        await newFollow.save();
        res.status(200).send({
            message: "New Friend Added",
            success: true
        })
    } catch (e) {
        if (e === 409) {
            return res.status(409).json({
                message: "You've already followed the user",
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

module.exports = { getFollowers, addFollower, delFollower };
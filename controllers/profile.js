/*

Author of this file: Shardul Kavale B00798007


*/
const { User } = require('../models/userSchema');
const { Post } = require('../models/postSchema');
const { Review } = require('../models/reviewSchema');
const messageModel = require('../models/messageModel');

const getData = async (req, res, next) => {
	const id = req.params.id;
	try {
		let user = await User.findById(id);
		if (user) {
			return res.status(200).json({
				success: true,
				response: user,
			});
		} else {
			return res.status(401).json({
				success: false,
				response: 'User Not Found',
			});
		}
	} catch (e) {
		return res.status(500).json({
			success: false,
			response: 'Something went wrong',
		});
	}
};
const getFriends = async (req, res) => {
	console.log('pls work');

	try {
		const friendGet = await User.find({});
		return res.status(200).json({
			success: true,
			friends: friendGet,
		});
	} catch (error) {
		res.status(500).json({
			error: {
				errorMessage: 'Internal Sever Error',
			},
		});
	}
};
const messageUploadDB = async (req, res) => {
	const { senderId, senderName, reseverId, message } = req.body;

	try {
		const newReport = new messageModel({
			senderId: senderId,
			senderName: senderName,
			reseverId: reseverId,
			message: message,
		});
		await newReport.save();
		// const insertMessage = await messageModel.create({
		//      senderId : senderId,
		//      senderName : senderName,
		//      reseverId : reseverId,
		//      message :  message

		// })
		//   const insertMessage = new messageModel({
		//     senderId : senderId,
		//        senderName : senderName,
		//        reseverId : reseverId,
		//        message :  message

		// });
		// await insertMessage.save();
		res.status(200).send({
			message: newReport,
			success: true,
		});
	} catch (error) {
		res.status(500).json({
			error: {
				errorMessage: 'Internal Sever Error',
			},
		});
	}

	// console.log(req.body);
	//  console.log(reseverId)
};
const messageGet = async (req, res) => {
	console.log('hh');
	console.log(req.body.SenderId);
	console.log(req.params.id);

	try {
		let getAllMessage = await messageModel.find({});

		getAllMessage = getAllMessage.filter(
			(m) =>
				(m.senderId === req.body.SenderId && m.reseverId === req.params.id) ||
				(m.reseverId === req.body.SenderId && m.senderId === req.params.id)
		);
		//  console.log(getAllMessage);
		res.status(200).json({
			success: true,
			message: getAllMessage,
		});
	} catch (error) {
		res.status(500).json({
			error: {
				errorMessage: 'Internal Server error',
			},
		});
	}
};
const updateData = async (req, res, next) => {
	const id = req.params.id;
	console.log('Request body is\n\n' + req.body.profileImage);
	try {
		let user = User.findByIdAndUpdate(id, req.body, function (err, result) {
			if (err) {
				console.log(err);
			} else {
				// console.log("Updated User : ", res);
				return res.status(200).json({
					success: true,
					response: result,
				});
			}
		});
	} catch (e) {
		return res.status(500).json({
			success: false,
			response: 'Something went wrong',
		});
	}
};

const createPost = async (req, res, next) => {
	const data = req.body;
	try {
		const post = new Post(data);
		await post.save();
		res.status(200).json({
			success: true,
			response: 'Post Created',
		});
	} catch (e) {
		console.log('error:  ' + e);
		res.status(500).json({
			success: false,
			response: 'Something went wrong. Try again later',
		});
	}
};

const getPosts = async (req, res, next) => {
	let id = req.params.id;
	Post.find({ userId: id })
		.sort({ _id: -1 })
		.then(function (posts) {
			res.status(200).json({
				success: true,
				posts: posts,
			});
		})
		.catch(() => {
			console.log('error:  ' + e);
			res.status(500).json({
				success: false,
				response: 'Something went wrong. Try again later',
			});
		});
};

const deletePost = async (req, res, next) => {
	let id = req.params.id;
	try {
		await Post.findByIdAndDelete(id);
		res.status(200).json({
			success: true,
			response: 'Post Deleted',
		});
	} catch (e) {
		res.status(500).json({
			success: false,
			response: 'Somehting went wrong. Try again later',
		});
	}
};

const getInfoById = async (req, res) => {
	let id = req.params.id;
	try {
		let user = await User.findById(id);
		if (user) {
			const returnObj = {
				firstName: user.firstName,
				lastName: user.lastName,
				profileImage: user.profileImage,
				userId: user._id,
			};
			res.status(200).json({
				success: true,
				response: returnObj,
			});
		} else {
			return res.status(200).json({
				success: true,
				response: result,
			});
		}
	} catch (e) {
		res.status(500).json({
			success: false,
			response: 'Somehting went wrong. Try again later',
		});
	}
};

const postReview = async (req, res, next) => {
	const data = req.body;
	try {
		const review = new Review(data);
		await review.save();
		res.status(200).json({
			success: true,
			response: 'Review Created',
		});
	} catch (e) {
		console.log('error:  ' + e);
		res.status(500).json({
			success: false,
			response: 'Something went wrong. Try again later',
		});
	}
};

const getReviews = async (req, res, next) => {
	let id = req.params.id;
	Review.find({ userId: id })
		.sort({ _id: -1 })
		.then(function (reviews) {
			res.status(200).json({
				success: true,
				reviews: reviews,
			});
		})
		.catch(() => {
			console.log('error:  ' + e);
			res.status(500).json({
				success: false,
				response: 'Something went wrong. Try again later',
			});
		});
};

module.exports = {
	getData,
	updateData,
	createPost,
	getPosts,
	deletePost,
	getInfoById,
	getFriends,
	messageUploadDB,
	messageGet,
	postReview,
	getReviews,
};

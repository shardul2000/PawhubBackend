
const express = require('express');
const router = express.Router();
const { middleware } = require('../middleware/private');
const {getData, updateData, createPost,getPosts,deletePost,getInfoById,getFriends,messageUploadDB,messageGet,postReview,getReviews, getUserData} = require('../controllers/profile');

//middleware will check jwt token for every request
router.get('/getData/:id', middleware, getData);
router.get('/getUserData/:id', getUserData);

router.post('/updateData/:id', middleware, updateData);

router.post('/createPost', middleware, createPost);

router.get('/getInfoById/:id', getInfoById);

router.get('/getPosts/:id', getPosts);

router.delete('/deletePost/:id', middleware, deletePost);

router.get('/get-friends', getFriends);

router.post('/send', messageUploadDB);
router.post('/get-message/:id', messageGet);

router.post('/postReview', middleware, postReview);
router.get('/getReviews/:id', getReviews);

module.exports = router;

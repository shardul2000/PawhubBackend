const router = require('express').Router();

const {getFriends,messageUploadDB,messageGet} = require('../controllers/messengerController');

router.get('/get-friends',getFriends);
router.post('/send-message', messageUploadDB);
router.get('/get-message/:id', messageGet);

module.exports = router;
const express = require("express");
const router = express.Router();
const{ register, login, checkValid } = require("../controllers/authentication")
const { middleware } = require('../middleware/private');

router.post("/register", register);
router.post("/login", login);
router.get('/checkValid', middleware, checkValid );

module.exports= router;
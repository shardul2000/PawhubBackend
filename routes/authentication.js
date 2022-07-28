/*

Author of this file: Shardul Kavale B00798007


*/
const express = require("express");
const router = express.Router();
const{ register, login } = require("../controllers/authentication")


router.post("/register", register);
router.post("/login", login);


module.exports= router;
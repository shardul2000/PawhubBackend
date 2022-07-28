//Sarah: initializing controllers and needed functions
const express = require("express");
const router = express.Router();
const{  addFavourite, getFavourites, deleteFavourite, getListingDataById, checkFavourite} = require("../controllers/favourites")

//Sarah: creating router for fetching, middleware checks token
router.post("/addFavourite", addFavourite);
router.get("/getFavourites/:id", getFavourites); //getting favourite by client ID
router.post("/deleteFavourite", deleteFavourite);
router.get("/getListingDataById/:id",getListingDataById);
router.post("/checkfavourite",checkFavourite);

module.exports = router


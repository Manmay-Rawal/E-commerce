// import express from "express";
// import userController from "../controller/user.controller.js"

const express = require("express");
const userController = require("../controller/auth.controller.js")

const router = express.Router();


router.get("/profile",userController.getUserProfile);
router.get("/",userController.getAllUsers);

module.exports = router;
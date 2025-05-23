// import express from "express";
// import authController from "../controller/auth.controller.js"

const express = require("express")
const authController = require("../controller/auth.controller.js")

const router = express.Router();


router.post("/signup",authController.resister);
router.post("/signin",authController.login);

module.exports = router;
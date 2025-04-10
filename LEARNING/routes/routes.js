const express = require("express")
const router = express.Router();
const path = require("path");
const {homeRoute, formDataRoute} = require("../controllers/app-controllers");

// HOME route
router.get("/", homeRoute);
router.post("/register", formDataRoute);

module.exports = router;
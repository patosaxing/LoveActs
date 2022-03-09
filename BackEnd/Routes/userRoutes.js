//Import Statements
const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const authControl = require("../Controllers/authControl")
const { protect, admin } = require("../Middleware/authMiddleware")

//Router statement for Register and Login
router.post("/register", authControl.register)

router.post("/login", authControl.login)

router.post("/newConversation", protect, authControl.getConversation)

router.post("/newMessage", protect, authControl.newMessage)

router.get("/getMessage", protect, authControl.getMessages)

router.get("/allusers", protect, authControl.allUsers)

router.get("/followUser", protect, authControl.followUser)

module.exports = router
//Import Statements
const express = require("express");
const { check, validationResult } = require("express-validator");
const router = express.Router();
const authControl = require("../Controllers/authControl")
const { protect, admin } = require("../Middleware/authMiddleware")

//Router statement for Register and Login
router.post("/register", authControl.register)

router.post("/login", authControl.login)

router.post("/newConversation", authControl.getConversation)

router.post("/newMessage", authControl.newMessage)

router.get("/getMessage", authControl.getMessages)

router.get("/allusers", authControl.allUsers)

module.exports = router
//Import Statements
const express = require("express");
const { check, validationResult } = require("express-validator");
const { createPost } = require("../Controllers/authControl");
const router = express.Router();
const authControl = require("../Controllers/authControl")
const { protect, admin } = require("../Middleware/authMiddleware")

//Router Statement for Register and Login
router.post("/register", authControl.register)
router.post("/login", authControl.login)

//Router Statement for Logout
router.get("/logout", protect, authControl.logout)

//Router Statement for Messages
router.post("/newConversation", protect, authControl.getConversation)
router.post("/newMessage", protect, authControl.newMessage)
router.get("/getMessage", protect, authControl.getMessages)

//Router Statement for Users
router.get("/allusers", protect, authControl.allUsers)
router.get("/followUser", protect, authControl.followUser)

//Router Statement for Posts
router.post("/createPost", protect, authControl.createPost)
router.get("/likeAndUnlikePost", protect, authControl.likeAndUnlikePost)
router.delete("/deletePost", protect, authControl.deletePost)
router.put("addComment/:id", protect, authControl.addComment)

//Router Statement for Followers
router.get("followUser/:id", protect, authControl.followUser)

//Router Statement for Update
router.put("/updateUserProfile", protect, authControl.updateUserProfile)
router.put("/updatePassword", protect, authControl.updatePassword)
router.put("/updateCaption", protect, authControl.updateCaption)

//Router Statement for Deleting User Profile
router.delete("/deleteMyProfile", protect, authControl.deleteMyProfile)

//Router Statement for getting all Users
router.get("/getAllUsers", protect, authControl.getAllUsers)

module.exports = router
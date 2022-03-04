const express = require("express")
const { protect } = require("../Middleware/authMiddleware")

const router = express.Router()

// router.route("/users").post(protect, accessChats)
// router.route("/users").get(protect, fetchChats)
// router.route("/group").post(protect, createGroupChat)
// router.route("rename").put(protect, renameGroup)
// router.route("/groupRemove").put(protect, removeFromGroup)
// router.route("/groupAdd").put(protect, addToGroup)

module.exports = router;
//Import Mongoose
const mongoose = require("mongoose");

//Setup Conversation Schema
const ConversationSchema = new mongoose.Schema(
    {
        members:{
            type: Array,
        }
    },
    { timestamps: true }
);

module.exports = mongoose.model("Conversation", ConversationSchema);
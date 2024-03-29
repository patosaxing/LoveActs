//Import Mongoose
const mongoose = require("mongoose");

//Setup Conversation Schema
const ConversationSchema = mongoose.Schema(
    {
        members:{
            type: Array,
        }
    },
    { timestamps: true }
);

const Conversation = mongoose.model("Conversation", ConversationSchema);

//Export Conversation Function
module.exports = Conversation;
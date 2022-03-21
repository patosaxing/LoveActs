//Import mongoose
const mongoose = require("mongoose");

//Setup Message Schema
const MessageSchema = new mongoose.Schema(
    {
        conservationId: 
        {
            type: String
        },

        sender:
        {
            type: String
        },

        text:
        {
            type: String,
        }
    },
    { timestamps: true }
);


const Message = mongoose.model("Message", MessageSchema);

//Export Statement
module.exports = Message;
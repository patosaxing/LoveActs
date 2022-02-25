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
    },
    { timestamps: true }
);

module.exports = mongoose.model("Message", MessageSchema);
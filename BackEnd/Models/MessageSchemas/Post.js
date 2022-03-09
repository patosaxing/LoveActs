//Import Mongoose Schema
const mongoose = require("mongoose");

//Setup Post Schema
const PostSchema = new mongoose.Schema(
    {
        owner:
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            // required: true
        },
        desc:
        {
            type: String,
            max: 500
        },

        createdAt: {
            type: Date,
            default: Date.now
        },

        img:
        {
            public_id: String,
            url: String
        },
        likes:[
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
            }],

        comments: [
            {
                user: {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: "User",
                },
                comment: {
                    type: String,
                    required: true
                }
            }
        ]    
        
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Post", PostSchema);
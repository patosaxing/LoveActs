//Import Mongoose Schema
const mongoose = require("mongoose");

//Setup Post Schema
const PostSchema = new mongoose.Schema(
    {
        caption: String,

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

const Post = mongoose.model("Post", PostSchema);

//Export Post Statement
module.exports = Post;
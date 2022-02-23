const mongoose = require("mongoose");

const reviewSchema = mongoose.Schema(
    {
        user:
        {
            type: mongoose.Schema.Types.ObjectId,
            required: false,
            ref: "user"
        },
        reviewer: 
        { 
            type: String, 
            required: false 
        },
    })

const videoSchema = mongoose.Schema(
    {
        user: 
        {
            type: mongoose.Schema.Types.Mixed,
            required: true,
            ref: "user"
        },

        reviews: [reviewSchema]
    })

const Video = mongoose.model("Video", videoSchema)

module.exports = Video;
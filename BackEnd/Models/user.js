// Import Statements for User Schema

const crypto = require("crypto"); //this calculates the hashes and authentication
const mongoose = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//Declares and imports Schema from mongoose to connect to mongodb
const UserSchema = mongoose.Schema(
    {
        userName: 
        {
            type: String, required: true, unique: true,
            minLength: 3, maxLength: 20 
        },

        email: 
        { 
            type: String, lowercase: true, unique: true, 
            index: true, required:[true, "can't be blank"],
            match: [/\S+@\S+\.\S+/, "is invalid"],
            maxLength:50
        },

        password: 
        {
             type: String, required: true, minLength: 6 
        },

        firstName:
        {
            type: String, required: true, trim: true, 
            maxLength: 25 
        },

        lastName: 
        { 
            type: String, required: true, trim: true,
            maxLength: 25 
        },

        pic:
        {
            type: "String",
            required: true,
            default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg"
        },

        followers:
        {
            type: Array,
            default: []
        },

        followings:
        {
            type: Array,
            default: []
        },

        // userLocation: { type: String, required: false },

        resetPasswordToken: String,
        resetPasswordExpire: Date,    
    },
    {
        timestamps: true,
    }
)

//Function checks and matches password entered
UserSchema.methods.matchPassword = async function (enteredPassword)
{
    return await bcrypt.compare(enteredPassword, this.password);
}

//Hashes the password right from the start
UserSchema.pre("save", async function (next)
{
    if(!this.isModified("password"))
    {
        next();
    }

    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
})


//Function to authenticate user sign in by ID
UserSchema.methods.getSignedJwtToken = () =>
{
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRE
        })
}


//Function for Reset Password
UserSchema.methods.getResetPasswordToken = () =>
{
    const resetToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex")

    //Set Expired Token Date
    this.resetPasswordExpire = Date.now() + 10 * (60 * 1000);

    return resetToken;
}


const User = mongoose.model("User", UserSchema);

//Exports Statements
module.exports = User;
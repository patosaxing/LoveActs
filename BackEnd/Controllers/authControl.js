//Import Statements
const crypto = require("crypto");
const User = require("../Models/user");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");

/*
Authentication Control(authControl) Function..
This contains the Register, Login, Logout, All things
User Profile and Forgot Password functions..
*/

const authControl = {

    //Register Function
    register: asyncHandler(async (req, res, next) =>
    {
        //Takes what is entered into each area 
        const { userName, email, password, firstName, lastName } = req.body

        //Check if Username exists
        const userExits = await User.findOne({ userName })
        if (userExits)
        {
            return res.status(400).json("Username already exists,....Log In")
        }

        //Check if Email exists
        const emailExists = await User.findOne({ email })
        if (emailExists)
        {
            return res.status(400).json("Email already exists....Log In")
        }

        //Create New User
        const user = await User.create(
        {
            userName, email, password, firstName, lastName
        })

        if(user)
        {
            res.status(201).json(
                {
                    _id: user._id,
                    userName: user.userName,
                    email: user.email,
                    firstName: user.firstName,
                    lastName: user.lastName,
                    token: generateToken(user._id)
                })
        }
        else
        {
            return res.status(400).json("Invalid user data. All fields are required")
        }
    }),

    //Login Function
    login: async(req, res, next) =>
    {
        //Test statement to make sure all is on point
        console.log("here")

        //Takes what is entered into each area
        const{ email, password } = req.body

        const user = await User.findOne({ email })
        console.log(user)

        if(user && (await user.matchPassword(password)))
        {
            res.json({
                userName: user.userName,
                email: user.email,
                //isAdmin: user.isAdmin
                token: generateToken(user._id)
            })
        }
        else
        {
            return res.status(401).json("Invalid Email or Password")
        }
    },

    //Logout Function
    logout: async(req, res) => {
        try 
        {
            res.clearCookie("token")
            return res.send("token")
        } 
        catch (error) 
        {
            return res.status(500).json({ msg: error.message })
        }
    }
}

//Export Statement for authControl
module.exports = authControl
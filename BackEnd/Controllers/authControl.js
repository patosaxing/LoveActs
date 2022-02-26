//Import Statements
const crypto = require("crypto");
const User = require("../Models/user");
const asyncHandler = require("express-async-handler");
const { generateToken } = require("../utils/generateToken");
const sendEmail = require("../utils/sendEmail");

//Message Import Statement
const Message = require("../Models/MessageSchemas/message");
const Post = require("../Models/MessageSchemas/Post");
const Conversation = require("../Models/MessageSchemas/conversation");


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
    },



    //All things related and functions with Messages

    //Add Messages
    newMessage: async(req, res) => {
        const newMessage = new Message(req.body);

        try
        {
            const savedMessage = await newMessage.save();
            res.status(200).json(savedMessage);
        }
        catch(err)
        {
            res.status(500).json(err);
        }
    },

    //Get Messages
    getMessages: async(req, res) => {
        try 
        {
            const messages = await Message.find({
                conversationId: req.params.conversationId,
            });
            res.status(200).json(messages);
        } 
        catch (error) 
        {
            res.status(500).json(err);
        }
    },

    //New Conversation
    newConversation: async(req, res) => {
        const newConversation = new Conversation({
                members: [req.body.senderId, req.body.receiverId],
            }
        )

        try{
            const savedConversation = await newConversation.save();
            res.status(200).json(savedConversation);
        }
        catch(err){
            res.status(500).json(err);
        }
    },

    //get Conversation of a User
    getConversation: async(req, res) => {
        try
        {
            const conversation = await Conversation.find(
                {
                    members: { $in: [req.params.userId] },
                })
                res.status(200).json(conversation);
        }
        catch(err)
        {
            res.status(500).json(err);
        }
    },

    //Get Conversations that includes 2 User IDs
    twoConversation: async(req, res) => {
        try
        {
            const conversation = await Conversation.findOne({
                memebers: { $all: [req.params.firstUserId, req.params.secondUserId] },
            })
            res.status(200).json(conversation)
        }
        catch(err)
        {
            res.status(500).json(err);
        }
    },

    //Create a Post
    newPost: async(req, res) => {
        const newPost = new Post(req.body);
        try 
        {
            const savedPost = await newPost.save();
            res.status(200).json(savedPost);
        } 
        catch(err) 
        {
            res.status(500).json(err);
        }
    },

    //Update a Post
    updatePost: async(req, res) => {
        try
        {
            const post = await Post.findById(req.params.id)
            if (post.userId === req.body.userId)
            {
                await post.updateOne({ $set: req.body });
                res.status(200).json("the post has been updated");
            }
            else
            {
                res.status(403).json("you can update only your post");
            }
        }
        catch(err)
        {
            res.status(500).json(err);
        }
    }
}

//Export Statement for authControl
module.exports = authControl
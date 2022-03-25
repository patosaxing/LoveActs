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
// const { post } = require("../Routes/userRoutes");


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
        const { userName, email, password, firstName, lastName, pic } = req.body

        //Makes sure fields are entered into textfields
        if(!userName || !email || !password || !firstName || !lastName){
            res.status(400)
            throw new Error("Please Enter all the Fields")
        }

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
            userName, email, password, firstName, lastName, pic
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
                    pic: user.pic,
                    token: generateToken(user._id)
                })
        }
        else
        {
            return res.status(400).json("Failed to Create a User")
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
                pic: user.pic,
                //isAdmin: user.isAdmin
                token: generateToken(user._id)
            })
        }
        else
        {
            return res.status(401).json("Invalid Email or Password")
        }
    },

    //Get User Profile
    getUserProfile: async(req, res) => {
        const user = await User.findById(req.user._id)

        if(user)
        {
            res.json({
                userName: user.userName,
                email: user.email,
                firstName: user.firstName,
                lastName: user.lastName,
                isAdmin: user.isAdmin
            })
        }
        else
        {
            return res.status(401).json("User not found")
        }
    },

    //Another Get User Profile Function
    userProfile: async(req, res) => {
        try{
          const user = await User.findById(req.params.id).populate("posts")
          
          if(!user){
              return res.status(404).json({
                  success: false,
                  message: "User not found"
              })
          }

          res.status(200).json({
              success: true,
              user,
          })
        }
        catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    //Get My Profile with Posts
    myProfile: async(req, res) => {
        try{
          const user = await User.findById(req.user._id).populate("posts")
          
          res.status(200).json({
              success: true,
              user,
          })
        }
        catch(error){
          res.status(500).json({
              success: false,
              message: error.message
          })  
        }
    },

    //Update or and Edit User Profile
    updateUserProfile: async(req, res) => {
        const id = req.user._id
        const user = await User.findById(req.user._id)

        if(user) {
            user.userName = req.body.userName || user.userName
            user.email = req.body.email || user.email

            if(req.body.password){
                user.password = req.body.password
            }

            const updatedUser = await user.save()

            res.json({
                userName: updatedUser.userName,
                email: updatedUser.email
            })
        }
        else{
            return res.status(401).json("User not found")
        }
    },

    //Delete User Profile
    deleteMyProfile: async(req, res) => {
        try{
           const user = await User.findById(req.user._id) 
           const posts = user.posts
           const followers = user.followers
           const following = user.following
           const userId = user._id
           await user.remove()

           await user.remove()

           //Logout user after deleting profile
           res.cookie("taken", null, {
               expires: new Date(Date.now),
               httpOnly: true
           })
           
           //Deletes all Posts of the User
           for (let i = 0; i < posts.length; i++) {
            const post = await Post.findById(posts[i])
            await post.remove() 
               
           }

           //Removing User from Followers Following 
           for(let i = 0; i < followers.length; i++) {
               const follower = await User.findById(followers[i]);
               
               const index = follower.following.indexOf(userId)
               follower.following.splice(index, 1)
               await follower.save()
           }

           for(let i = 0; i < following.length; i++) {
            const follows = await User.findById(following[i]);
            
            const index = follows.following.indexOf(userId)
            follows.following.splice(index, 1)
            await follows.save()
        }

           res.status(200).json({
             success: true,
             message: "Profile Deleted"  
           })
        }
        catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    //Get all Users
    getUsers: async (req, res) => {
        const user = await User.find({})
        res.json(user)
    },

    //Another Get all Users Function
    getAllUsers: async (req, res) => {
        try{
            const users = await User.find({})

            res.status(200).json({
                success: true,
                users
            })
        }
        catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    //Delete User Function
    deleteUser: async (req, res) => {
        const user = await User.findById(req.params.id)

        if(user){
            await user.remove()
            res.json({ message: "User Removed" })
        }
        else{
            return res.status(400).json("User not found")
        }
    },

    //Update User Function
    updateUser: async (req, res) => {
        const user = await User.findById(req.params.id)

        if(user){
            user.name = req.body.name || user.name
            user.email = req.body.email || user.email

            const updatedUser = await user.save()

            res.json({
                name: updatedUser.name,
                email: updatedUser.email
            })
        }
        else{
            return res.status(404).json ("User not found")
        }
    },

    // Logout Function
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

    //Another Logout Function
    logout: async(req, res) => {
        try{
            res
                .status(200)
                .cookie("token", null, { expires: new Date(Date.now()), httpOnly: true })
                .json({
                    success: true,
                    message: "Logged Out"
                })
        }
        catch(error){
            res.status(500).json({
                success: false,
                message: error.message,
            })
        }
    },

    //Forgot Password Function
    forgotPassword: async (req, res) => {
        /*Send Email to whatever email address is
         entered but check if the email exists 
        */
       const { email } = req.body;
       try{
           const user = await User.findOne({ email });
           
           if(!user) {
               return res.status(404).json("This email cant be sent")
           }

           /* This resets the Token Gen and then add it
           to the database the hashed(private) version of
           Token
            */
           const resetToken = user.getResetPasswordToken();

           await user.save();

           //Creates the reset url of email provided
           const resetUrl = `http://localhost:4000/users/passwordreset/${resetToken}`

           //HTML Message to send to email
           const message = `
           <h1>You have requested a password reset</h1>
           <p>Please go to this link to reset your password:</p>
           <a href = ${resetUrl} clicktracking = off>${resetUrl}</a>`;

           try{
               await sendEmail({
                   to: user.email,
                   subject: "LoveActs Password Reset",
                   text: message
               })

               res.status(200).json({ success: true, data: `Email Sent to ${email}` })
           } 
           catch(err){
               console.log(err);

               user.resetPasswordToken = undefined;
               user.resetPasswordExpire = undefined;

               await user.save();
               return res.status(500).json('Email could not be sent')
           }
       }
       catch(err){
           next(err);
       }
    },

    //Reset Password Function
    resetPassword: async(req, res) => {
        //Compare token in URL params to hashed token
        const resetPasswordToken = crypto
            .createHash('sha256')
            .update(req.params.resetToken)
            .digest('hex');

        try{
            const user = await User.findOne({
                resetPasswordToken,
                resetPasswordExpire: { $gt: Date.now() }
            })

            if(!user){
                return res.status(400).json('Invalid Token')
            }

            user.password = req.body.password;
            user.resetPasswordToken = undefined;
            user.resetPasswordExpire = undefined;

            await user.save();

            res.status(201).json({
                success: true,
                data: 'Password Reset Success',
                token: user.getSignedJwtToken(),
            })
        }
        catch(err){
            next(err)
        }    
    },

    //Search for Users (/api/user?search=pato)
    allUsers: asyncHandler(async (req, res) => {
        const keyword = req.query.search
        ? {
            $or: [
                { userName: { $regex: req.query.search, $options: "i" } },
                { email: { $regex: req.query.search, $options: "i" } },
            ],
        }
        : {}

        const users = await User.find(keyword).find({ _id: { $ne: req.user._id } })
        res.send(users)

        // console.log(keyword)
    }),


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

    //All things related to Posts

    //Another create post function
    createPost: async(req, res) => {
        try{
            const newPostData = {
                caption: req.body.caption,
                img:{
                    public_id: "req.body.public_id",
                    url: "req.body.url"
                },
                owner: req.user._id
            }

            const newPost = await Post.create(newPostData)

            const user = await User.findById(req.user._id)

            user.posts.push(newPost._id)

            await user.save()

            res.status(201).json({
                success: true,
                post: newPost
            })
        } 
        catch(error){
            res.status(500).json({
                success:false,
                message:error.message
            })
        }
    },

    //Create a Post
    // newPost: async(req, res) => {
    //     const newPost = new Post(req.body);
    //     try 
    //     {
    //         const savedPost = await newPost.save();
    //         res.status(200).json(savedPost);
    //     } 
    //     catch(err) 
    //     {
    //         res.status(500).json(err);
    //     }
    // },

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
    },

    likeAndUnlikePost: async(req, res) => {
        try{
           const post = await Post.findById(req.params.id)

           if(!post){
               return res.status(404).json({
                   success: false,
                   message: "Post not Found"
               })
           }

           if(post.likes.includes(req.user._id)){
               const index = post.likes.indexOf(req.user._id)
               post.likes.splice(index, 1)

               await post.save()

               return res.status(200).json({
                   success: true, 
                   message: "Post Unliked"
               })
           }

           else{
               post.likes.push(req.user._id)

               await post.save()
           }

        }
        catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    deletePost: async(req, res) => {
        try{
          const post = await Post.findById(req.params.id)
          
          if(!post){
              return res.status(404).json({
                  success: false,
                  message: "Post not found"
              })
          }

          if(post.owner.toString() !== req.user._id.toString()){
              return res.status(401).json({
                  success: false,
                  message:"Unauthorized"
              })
          }

          await post.remove()

          const user = await User.findById(req.user._id)

          const index = user.posts.indexOf(req.params.id)
          user.posts.splice(index, 1)
          await user.save()

          
          res.status(200).json({
              success: true,
              message: "Post Deleted"
          })
        }
        catch(error){
          res.status(500).json({
              success: false,
              message: error.message,
          })  
        }
    },
    
    //Follower Function
    followUser: async(req, res) => {
        try {
            const userToFollow = await User.findById(req.params.id)
            const loggedInUser = await User.findById(req.user._id)

            if(!userToFollow){
                return res.status(404).json({
                    success: false,
                    message: "User not found"
                })
            }

            // loggedInUser.following.push(userToFollow._id)
            // userToFollow.followers.push(loggedInUser._id)

            if(loggedInUser.following.includes(userToFollow._id)){
                const indexFollowing = loggedInUser.following.indexOf(userToFollow._id)
                const indexFollowers = userToFollow.followers.indexOf(loggedInUser._id)

                loggedInUser.following.splice(indexFollowing, 1)
                userToFollow.followers.splice(indexFollowers, 1)

                await loggedInUser.save()
                await userToFollow.save()

                res.status(200).json({
                    success: true,
                    message: "User Unfollowed"
                })
            }
            else{
                loggedInUser.following.push(userToFollow._id)
                userToFollow.followers.push(loggedInUser._id)

                await loggedInUser.save()
                await userToFollow.save()

                res.status(200).json({
                    success: true,
                    message: "User Followed"
                })

            }

            // await loggedInUser.save()
            // await userToFollow.save()
        }
        catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    //Password Update Function
    updatePassword: async(req, res) => {
        try{
            const user = await User.findById(req.user._id).select("+password")

            const { oldPassword, newPassword } = req.body

            if(!oldPassword || !newPassword){
                return res.status(400).json({
                    success: false,
                    message: "Please provide Old and New Password"
                })
            }

            const isMatch = await User.matchPassword(oldPassword)

            if(!isMatch){
                return res.status(400).json({
                    success: false,
                    message: "Incorrect Old Password"
                })
            }

            user.password = newPassword
            await User.save()

            res.status(200).json({
                success: true,
                message: "Password Updated"
            })

        }
        catch(error){
            res.status(500).json({
                success: false, 
                message: error.message
            })
        }
    },

    //Update Caption Function
    updateCaption: async(req, res) => {
        try{
            const post = await Post.findById(req.params.id)

            if(!post){
                return res.status(404).json({
                    success: false,
                    message: "Post not found"
                })
            }

            if(Post.owner.toString() !== req.user._id.toString()){
                return res.status(401).json({
                    success: false,
                    message: "Unauthorized"
                })
            }

            Post.caption = req.body.caption
            await Post.save()

            res.status(200).json({
                success: true,
                message: "Post Updated"
            })

        } 
        catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    //Add Comment Function
    addComment: async(req, res) => {
        try{
            const post = await Post.findById(req.params.id)

            if(!post){
                return res.status(404).json({
                    success: false,
                    message: "Post not found"
                })
            }

            let commentIndex = -1;

            //Checking to see if Comment already exists
            arr = [1,2,3,4,5]

            post.comments.forEach((item, index) => {
                if(item.user.toString() === req.user._id.toString()){
                    commentIndex = index;
                }
            })

            if(commentIndex !== -1){
                post.comments[commentIndex].comment = req.body.comment

                await post.save();

                return res.status(200).json({
                    success: true,
                    message: "Comment Updated"
                })
            }
            else{
                post.comments.push({
                   user: req.user._id,
                   comment: req.body.comment
                })

                await post.save()
                return res.status(200).json({
                    success: true,
                    message: "Comment Added"
                })
            }

        }
        catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    },

    //Delete Comment Function
    deleteComment: async(req, res) => {
        try{
            const post = await Post.findById(req.params.id)

            if(!post){
              return res.status(404).json({
                  success: false,
                  message: "Post not found"
              })  
            }

            if(post.owner.toString() === req.user._id.toString() ){
               post.comments.forEach((item, index) => {
                   if(item._id.toString() === req.body.commentId.toString()){
                       return post.comments.splice(index, 1)
                   }
               })
               
               await post.save()

               return res.status(200).json({
                   success: true,
                   message: "Selected comment has been deleted"
               })
            }
            else{
               post.comments.forEach((item, index) => {
                if(item.user.toString() === req.user._id.toString() ){
                    post.comments.splice(index, 1)
                    //commentIndex = index
                } 
               }) 

               await post.save()

               res.status(200).json({
                   success: true,
                   message: "Your comment has been deleted"
               })
            }
            
        }
        catch(error){
            res.status(500).json({
                success: false,
                message: error.message
            })
        }
    }
}

//Export Statement for authControl
module.exports = authControl
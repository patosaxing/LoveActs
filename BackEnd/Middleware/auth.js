//Another Authentication Function

//First Import Statements
const User = require("../Models/user")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

//An Authentication Function called isAutheticated
const isAuthenticated = async(req, res, next) => {
    try{
        const { token } = req.cookies
        
        if(!token){
            return res.status(401).json({
                message: "Please Login First"
            })
        }

        const decoded = await jwt.verify(token, process.env.SECRET)

        req.user = await User.findById(decoded._id)

        next()
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }
}

module.exports = { isAuthenticated }
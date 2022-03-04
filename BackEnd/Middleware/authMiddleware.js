//Import statement
const jwt = require("jsonwebtoken")

//Import Model
const User = require("../Models/user")

const protect = async(req, res, next) => {
    let token

    if(
        req.headers.authorization &&
        req.headers.authorization.startsWith("Bearer")
    ){
        token = req.headers.authorization.split(" ")[1]
    }

    if(!token){
        return res.status(401).json("User is not authorized to access this route")
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET)

        const user = await User.findById(decoded.id)

        if(!user){
            return res.status(404).json("No user found with this ID")
        }

        req.user = user
        next()
    }
    catch(err){
        return res.status(401).json("User not authorized to access this route")
    }
}

const admin = (req, res, next) =>
{
    if(req.user && req.user.isAdmin)
    {
        next()
    }
    else
    {
        return res.status(401).json("User not authorized to access this route")
    }
}

module.exports = { protect, admin }
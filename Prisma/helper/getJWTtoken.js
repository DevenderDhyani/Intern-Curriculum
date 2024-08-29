const jwt = require("jsonwebtoken")

const GetJWTtoken = (userId,) =>{
    return jwt.sign({userID:userId},process.env.JWT_SECRET,{expiresIn:'1 day'})
}

module.exports = GetJWTtoken
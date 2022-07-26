const jwt = require('jsonwebtoken')
const JWT_SECRET = require('../config')

const Verifier = (req,res,next)=>{``
    const token =req.header('auth-token')
    if(!token){
        res.status(401).send("Please login with correct credentials")
    }
    try {
        const compareToken =  jwt.verify(token,JWT_SECRET)
        req.user = compareToken.user
        next()
    } catch (error) {
        res.status(401).json({"err":"Please login with correct credentials"})
    }
}

module.exports = Verifier
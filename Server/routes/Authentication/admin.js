const express = require('express')
const router = express.Router()

// Creating a new user
router.post('/', [
    body('name').isString(),
    body('user').isEmail(),
    body('password').isString()
],async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log('not empty')
        return res.status(400).json({ error: errors.array() })
    }
    try {
        
        console.log(req.body)
        const u = await Users.findOne({ user: req.body.user })
        if(u){
            // console.log(u)
            return res.status(400).json({ "msg": "A user with this email already exists" })
        }
        else{
            //Users.create returns a promise
            const salt = await bcrpyt.genSalt(10)
            const pass = await bcrpyt.hash(req.body.password,salt)
            
            let user = await Users.create({
                name: req.body.name,
                user: req.body.user,
                password: pass  
            })
            const data = {
                user:{
                    id : user.id
                }
            }
            const authToken = jwt.sign(data,JWT_SECRET)
            return res.json({authToken})
        }
    }
    catch(err) {
        return res.status(500).send("Internal Error")
    }

})

//login endpoint
router.post('/login', [
    body('user').isString(),
    body('password').exists()
],async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ error: errors.array() })
    }
    try {
        console.log(req.body)
        let user = await Users.findOne({ user : req.body.user  })
        if(!user){
            console.log('user')
            return res.status(400).json({"msg":"Please login with valid credentials"})
        }
        const comparePass =  bcrpyt.compare(req.body.password,user.password)
        if(!comparePass){
            console.log('compare')
            return res.status(400).json({"msg":"Please login with valid credentials"})
        }
        const data = {
            user:{
                id : user.id
            }
        }
        const authToken = jwt.sign(data,JWT_SECRET)
        return res.json({authToken})
    }
    catch(err){
        res.status(500).send("Internal Error")
    }
})

// getting all the data for a user
router.post('/fetchall',fetchall,async (req,res)=>{
    try {
        const userid = req.user.id
        const user = await Users.findById(userid).select("-password")
        if(!user){
            res.status(400).json({"err":"Bad request"})
        }
        res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).send("Internal Error")
    }
})
module.exports = router


const express = require('express')
const { body, validationResult } = require('express-validator')
const bcrpyt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const teacher = require('../../models/teacher')
const router = express.Router()
const JWT_SECRET =require('../../config')

router.post('/', [
    body('name').isString(),
    body('userId').isString(),
    body('password').isString()
],async (req, res) => {
    //res.send(200).json({"hello":123})
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        console.log('not empty')
        return res.status(400).json({ error: errors.array() })
    }
    try {
        
        console.log(req.body)
        const u = await teacher.findOne({ userId: req.body.userId })
        if(u){
            // console.log(u)
            return res.status(400).json({ "msg": "A user with this email already exists" })
        }
        else{
            //teacher.create returns a promise
            const salt = await bcrpyt.genSalt(10)
            const pass = await bcrpyt.hash(req.body.password,salt)
            
            let user = await teacher.create({
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
router.post('/login', [
    body('userId').isString(),
    body('password').exists()
],async (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        res.status(400).json({ error: errors.array() })
    }
    try {
        console.log(req.body)
        let user = await teacher.findOne({ userId : req.body.userId  })
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


module.exports = router


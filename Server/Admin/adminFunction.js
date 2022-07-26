const express =  require('express');
const Verifier = require('../middlewares/Verifier');
const events = require('../models/events');
const Teacher = require('../models/teacher')
const router = express.Router()

//
router.post('/addTeach',Verifier,async (req,res)=>{
    try {
        const admin = req.user.id;
        const teacher = await Teacher.create({
            name:req.body.name,
            adminId:admin,
            userId:req.body.userId,
            password:req.body.password,
            subject:req.body.subject
        })
        console.log(teacher)
        res.status(200).json(teacher)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})

// endpoint for teacher to lectures 
router.post('/addEvent',Verifier,async (req,res)=>{
    try {
        const admin = req.user.id;
        const event = await events.create({
            adminId:admin,
            name:req.body.name,
            desc : req.body.desc
        })
        console.log(event)
        res.status(200).json(event)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})


module.exports = router
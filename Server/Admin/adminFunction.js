const express =  require('express');
const Verifier = require('../middlewares/Verifier');
const events = require('../models/events');
const Teacher = require('../models/teacher')
const router = express.Router()
const Admin = require('../models/admin')

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

router.get('/getAllTeach',Verifier,async (req,res)=>{
    try {
        const adminId = req.user.id;
        console.log(adminId)
        const admin = await Admin.findById(adminId)
        console.log(admin)
        const record = await Teacher.find()
        if(!record){
            console.log('no records added')
            res.json({'msg':'No records have been added for this student'})
        }
        console.log(record)
        res.status(200).json(record)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})

module.exports = router
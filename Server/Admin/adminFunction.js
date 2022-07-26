const express =  require('express');
const Verifier = require('../../middlewares/Verifier');
const events = require('../../models/events');
const teacher = require('C:/Users/shubham v kurunkar/Desktop/needforcode/need-for-code-31/Server/models/teacher.js')
const router = express.Router()

//
router.post('/admin/addTeach',Verifier,async (req,res)=>{
    try {
        const admin = req.user.id;
        const teacher = await Student.create({
            name:req.body.name,
            adminId:admin,
            userId:req.body.userId,
            password:req.body.password,
            subject:req.body.subject
        })
        console.log(student)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})

// endpoint for teacher to lectures 
router.post('/admin/addEvent',Verifier,async (req,res)=>{
    try {
        const admin = req.user.id;
        const student = await events.create({
            adminId:admin,
            name:req.body
        })
        console.log(student)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})


module.exports = router
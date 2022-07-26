const express =  require('express');
const Verifier = require('../../middlewares/Verifier');
const lectures = require('../../models/lectures');
const StudData = require('../../models/StudData');
const student = require('../../models/student');
const Student = require('../../models/student');
const router = express.Router()

// endpoint for teacher to add student data
router.post('/teacher/addStu',Verifier,async (req,res)=>{
    try {
        const teacher = req.user.id;
        const student = await Student.create({
            name:req.body.name,
            teacherId:teacher,
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

router.post('/teacher/addMarks',async (req,res)=>{
    try {
        const teacher = req.user.id;
        const sname = req.body.name;
        const findStudent = await student.find({name: sname })
        if(findStudent){
            
            const record = await StudData.create({
                name:cname,
                teacherId:teacher,
                userId:req.body.userId,
                password:req.body.password,
                subject:req.body.subject
            })
        }
        console.log(student)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})

// endpoint for teacher to lectures 
router.post('/teacher/sched',Verifier,async (req,res)=>{
    try {
        const teacher = req.user.id;
        const student = await lectures.create({
            teacherId:teacher,
            subject:req.body.subject,

        })
        console.log(student)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})


module.exports = router
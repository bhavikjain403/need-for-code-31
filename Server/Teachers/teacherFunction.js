const express =  require('express');
const Verifier = require('../middlewares/Verifier');
const lectures = require('../models/lectures');
const Student = require('../models/student');
const data = require('../models/data')
const router = express.Router()

// endpoint for teacher to add student data
router.post('/addStu',Verifier,async (req,res)=>{
    try {
        const teacher = req.user.id
        const student = await Student.create({
            name:req.body.name,
            teacherId:teacher,
            userId:req.body.userId,
            password:req.body.password,
            subject:req.body.subject
        })
        console.log(student._id)
        const record = await data.create({
            studentId : student._id,
            teacherId : teacher,
            subject : req.body.subject,
            marks : Number(req.body.marks),
        }
        )
        console.log(record)
        // console.log(student)
        res.status(200).json(student)
        // res.status(200).json(record)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})

// endpoint for teacher to lectures 
router.post('/sched',Verifier,async (req,res)=>{
    try {
        const teacher = req.user.id;
        const lecture = await lectures.create({
            teacherId:teacher,
            subject:req.body.subject,
            date : Date(req.body.date)

        })
        console.log(lecture)
        res.status(200).json(lecture)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})


module.exports = router
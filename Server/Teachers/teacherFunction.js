const express =  require('express');
const Verifier = require('../middlewares/Verifier');
const Teacher = require('../models/teacher')
const lectures = require('../models/lectures');
const Student = require('../models/student');
const data = require('../models/data')
const router = express.Router()
const attendance = require('../models/attendance')

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
        // console.log(student)
        res.status(200).json(student)
        // res.status(200).json(record)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})



router.post('/addMarks',Verifier,async (req,res)=>{
    try {
        const teacher = req.user.id
        const student = await Student.find({
            name:req.body.name,
            teacherId:teacher,
            userId:req.body.userId,
            subject:req.body.subject
        })
        const record = await data.create({
            studentId : student.id,
            teacherId : teacher,
            subject : req.body.subject,
            marks : Number(req.body.marks),
            date: Date(req.body.date)
        }
        )
        console.log(record)
        // console.log(student)
        res.status(200).json(record)
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

//endpoint for teacher to mark attendance
router.post('/attendance',Verifier,async (req,res)=>{
    try {
        const teacher = req.user.id;
        const attend = await attendance.create({
            teacherId:teacher,
            attendance: req.body.file,
            date : Date(req.body.date).getMonth()

        })
        console.log(attend)
        res.status(200).json(lecture)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})

router.get('/getAllStu',Verifier,async (req,res)=>{
    try {
        const teacherId = req.user.id;
        console.log(teacherId)
        const teacher = await Teacher.findById(teacherId)
        console.log(teacher)
        const student = await Student.find({teacherId:teacher.id})
        console.log(student)
        res.status(200).json(student)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})


module.exports = router
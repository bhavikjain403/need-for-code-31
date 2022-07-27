const express =  require('express');
const Verifier = require('../middlewares/Verifier');
const complaints = require('../models/complaints');
const lectures = require('../models/lectures');
const Data = require('../models/data');
const Student = require('../models/student');
const router = express.Router()

// endpoint for student to access all his/her data
router.get('/getAll',Verifier,async (req,res)=>{
    try {
        const studId = req.user.id;
        console.log(studId)
        const student = await Student.findById(studId)
        console.log(student)
        const record = await Data.find()
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

// endpoint for student to add complaints 
router.post('/complaint',Verifier,async (req,res)=>{
    try {
        const studId = req.user.id;
        const complaint = await complaints.create({
            studentId:studId,
            subject:req.body.subject,
            complaint:req.body.complaint
        })
        console.log(complaint)
    } catch (error) {
        console.log(error)
        res.status(500).json({error})
    }
})

router.get('/getMarks',Verifier,async (req,res)=>{
    try {
        const studId = req.user.id;
        const marks = await Data.find({
            studentId:studId
        })
        console.log(marks)
        res.status(200).json(marks)
    }
    catch(err){
        console.log(err)
        res.status(500).json(err)
    }
})


module.exports = router
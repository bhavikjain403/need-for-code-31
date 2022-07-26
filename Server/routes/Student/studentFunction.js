const express =  require('express');
const Verifier = require('../../middlewares/Verifier');
const complaints = require('../../models/complaints');
const lectures = require('../../models/lectures');
const StudData = require('../../models/StudData');
const Student = require('../../models/student');
const router = express.Router()

// endpoint for student to access all his/her data
router.post('/student/getAll',Verifier,async (req,res)=>{
    try {
        const studId = req.user.id;
        const student = await Student.findbyId({id:studId})
        console.log(student)
        const record = await StudData.findAll({studentId:studId})
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
router.post('/student/complainr',Verifier,async (req,res)=>{
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


module.exports = router
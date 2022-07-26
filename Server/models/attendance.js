const mongoose = require('mongoose')
const teacher = require('./teacher')

const attendanceSchema = new mongoose.Schema({
    attendance :{
        type : Object
    },
    date:{
        type: Date
    },
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Teacher
    }
})

module.exports =  mongoose.model('Attendance',attendanceSchema)
const mongoose = require('mongoose')
const student = require('./student')

const studDataSchema = new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:student,
        required:true
    },
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:teacher,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    marks:{
        type:Number,
        required:true
    }

})

module.exports = new mongoose.model('StudData',studDataSchema)
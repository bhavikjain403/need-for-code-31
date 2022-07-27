const mongoose = require('mongoose')
const student = require('./student')
const teacher = require('./teacher')

const DataSchema = new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:student,
    },
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:teacher,
    },
    subject:{
        type:String,
    },
    marks:{
        type:Number,
    },
    date:{
        type:Date
    }
})

module.exports =  mongoose.models['Data'] || mongoose.model('Data',DataSchema) 
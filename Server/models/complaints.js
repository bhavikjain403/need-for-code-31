const mongoose = require('mongoose')
const student = require('./student')

const complaintSchema = new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:student,
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    complaint:{
        type:String,
        required:true
    }

})

module.exports =  mongoose.model('Complaints',complaintSchema)
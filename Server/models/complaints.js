const mongoose = require('mongoose')
const student = require('./student')

const complaintSchema = new mongoose.Schema({
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:student,
    },
    subject:{
        type:String,
    },
    complaint:{
        type:String,
    }

})

module.exports =  mongoose.model('Complaints',complaintSchema)
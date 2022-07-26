const mongoose = require('mongoose')
const teacher = require('./teacher')

const lectureSchema = new mongoose.Schema({
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'teacher',
        required:true
    },
    subject:{
        type:String,
        required:true
    },
    time:{
        type:Date,
        default:Date.now,
        required:true
    }

})

module.exports =  mongoose.model('Lecture',lectureSchema)
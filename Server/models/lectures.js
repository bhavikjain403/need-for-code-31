const mongoose = require('mongoose')
const teacher = require('./teacher')

const lectureSchema = new mongoose.Schema({
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:teacher,
    },
    subject:{
        type:String,
    },
    time:{
        type:Date,
    }

})

module.exports =  mongoose.model('StudData',lectureSchema)
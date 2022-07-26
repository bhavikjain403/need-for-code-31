const mongoose = require('mongoose')
const teacher = require('./teacher')

const studDataSchema = new mongoose.Schema({
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:teacher,
    },
    subject:{
        type:String,
    },
    time:{
        type:Date,
        default:Date.now,
    }

})

module.exports =  mongoose.model('StudData',studDataSchema)
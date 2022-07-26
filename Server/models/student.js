const mongoose =require('mongoose')
const Teacher = require('./teacher')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Teacher
    },
    userId:{
        type:String,
    },
    password:{
        type:String,
    },
    date:{
        type: Date,
        default: Date.now
    },
    subject:{
        type:String,
    },
    
})

module.exports =  mongoose.model('Student',studentSchema)
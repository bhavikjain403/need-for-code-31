const mongoose =require('mongoose')
const Teacher = require('./teacher')

const studentSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Teacher
    },
    userId:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type: Date,
        default: Date.now
    },
    subject:{
        type:String,
        required:true
    },
    
})

module.exports =  mongoose.model('Student',studentSchema)
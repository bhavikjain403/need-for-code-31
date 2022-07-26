const mongoose =require('mongoose')

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
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
    students:{
        type:[{
            name:String
        }]
    },
   
})

module.exports = new mongoose.model('Teacher',teacherSchema)
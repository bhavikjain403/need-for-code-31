const mongoose =require('mongoose')
const Admin = require('./admin')

const teacherSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    adminId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Admin
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
    }
})

module.exports =  mongoose.model('Teacher',teacherSchema)
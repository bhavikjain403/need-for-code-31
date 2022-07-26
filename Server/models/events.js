const mongoose =require('mongoose')
const Admin = require('./admin')

const eventSchema = new mongoose.Schema({
    name:{
        type:String,
    },
    adminId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:Admin
    },
    date:{
        type: Date,
        default: Date.now
    },
    desc:{
        type: String
    }
})

module.exports =  mongoose.model('Events',eventSchema)
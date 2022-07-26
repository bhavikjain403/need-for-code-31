const mongoose =require('mongoose')
const Admin = require('./admin')

const eventSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    adminId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Admin'
    },
    date:{
        type: Date,
        default: Date.now
    }
})

module.exports =  mongoose.model('Events',eventSchema)
const mongoose =require('mongoose')

const adminSchema = new mongoose.Schema({
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
    teachers :{
        type:[{
        name: String
    }]} 
})

module.exports = new mongoose.model('Admin',adminSchema)
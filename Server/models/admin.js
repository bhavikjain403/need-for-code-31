const mongoose =require('mongoose')

const adminSchema = new mongoose.Schema({
    name:{
        type:String,
        
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
    }
})

module.exports =  mongoose.model('Admin',adminSchema)
const mongoose =require('mongoose')

const StudentSchema = new mongoose.Schema({
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
        type:[{
            name: String,
            marks : Number
        }
        ],
    },
    complaints: {
        type : [String]
    }
})

module.exports = new mongoose.model('Student',StudentSchema)
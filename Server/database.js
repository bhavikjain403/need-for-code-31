const mongoose = require('mongoose')
const url = 'mongodb+srv://soham:Soham123@cluster0.ry2yy.mongodb.net/test'

const connectM = () => {
    mongoose.connect(url, () => {
        console.log('Connection to database successful...')
    })
}

module.exports = connectM;
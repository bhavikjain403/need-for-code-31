const mongoose = require('mongoose')
const url = 'mongodb://localhost:27017/Sample'

const connectM = () => {
    mongoose.connect(url, () => {
        console.log('Connection to database successful...')
    })
}

module.exports = connectM;
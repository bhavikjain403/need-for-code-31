const mongoose = require('mongoose')
const url = 'mongodb+srv://user1:5QVNFub8MoQHLSCO@cluster0.enutn.mongodb.net/?retryWrites=true&w=majority'

const connectM = () => {
    mongoose.connect(url, () => {
        console.log('Connection to database successful...')
    })
}

module.exports = connectM;
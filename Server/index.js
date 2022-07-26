const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const bodyparser = require('body-parser')
const {body, validationResult} = require('express-validator')

const  app =express() 
const connect = require('./database')
const port = 3000

const teacherAuth = require('../Server/routes/Authentication/teacher')
const teacher = require('./routes/Teacher/teacherFunction')
const student = require('../Server/routes/Student/studentFunction')
const admin = require('../Server/routes/Admin/adminFunction')

connect()
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
app.use('/',teacherAuth)
app.use('/auth',teacherAuth)
app.use('/teacher',teacher)
app.use('/student',student)
app.use('/admin',admin)

app.get('/',(req,res)=>{
    res.send('Hi')
})

app.listen(port,()=>{
    console.log('Server listening on port 3000...')
})




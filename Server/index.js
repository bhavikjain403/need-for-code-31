const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const bodyparser = require('body-parser')
const  app =express() 
const connect = require('./database')
const port = 3000
const adminAuth = require('./routes/Authentication/admin')
const teacherAuth = require('./routes/Authentication/teacher')
const studentAuth = require('./routes/Authentication/student')
const teacher = require('./Teachers/teacherFunction')
const admin = require('./Admin/adminFunction')
const student = require('./Student/studentFunction')


connect()
app.use(express.json())
app.use(bodyparser.urlencoded({extended:true}))
// app.use('/auth' , teacherAuth)
app.use('/auth/admin',adminAuth)
app.use('/auth/teacher',teacherAuth)
app.use('/auth/student',studentAuth)
app.use('/teacher',teacher)
app.use('/student',student)
app.use('/admin',admin)

app.listen(port,()=>{
    console.log('Server listening on port 3000...')
})

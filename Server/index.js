const express = require('express')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const bodyparser = require('body-parser')
const  app =express() 
const people =['Bhavik', 'Soham', 'hardik', 'Shubham']
const port = 8080

app.use(express.json())
app.use(bodyparser.urlencoded({}))

app.get('/',(req,res)=>{
    res.send(people);
})

app.listen(port,()=>{
    console.log('Server listening on port 8080...')
})

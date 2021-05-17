const express = require('express')

const adminrouter= express.Router()

adminrouter.get('/about',(req,res)=>{
    res.send('this is admin about page')
})

adminrouter.post('/contact',(req,res)=>{
    res.send('this is admin contact page')
})

module.exports = adminrouter
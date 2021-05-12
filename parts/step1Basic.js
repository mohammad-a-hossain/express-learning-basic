// getting express 
const express =require('express')

//making an app object with express
const app = express()

//set a get router
app.get('/',(req,res)=>{
    res.send('this is home page')
})

//set a post router
app.post('/',(req,res)=>{
    res.send('this is home page with post request')
})


//setting a listener for runnig the server
app.listen(4000,()=>{
    console.log('the port is listening on 4000')
})

// getting express 
const express =require('express')



//making an app object with express.json() function
const app = express()
  
app.get('/',(req,res)=>{
    res.send(q)
})

//setting a listener for runnig the server
app.listen(4000,()=>{
    console.log('the port is listening on 4000')
})

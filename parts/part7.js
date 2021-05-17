// getting express 
const express =require('express')
// require adminrouter object from another folder
const adminrouter =require('./adminrouter')
// importing publicrouter from another folder
const publicrouter = require('./publicrouter')


//making an app object with express.json() function
const app = express()
  
//-R O U T E R -----------------------------------------
app.use('/admin',adminrouter)

app.use('/',publicrouter)


//setting a listener for runnig the server
app.listen(4000,()=>{
    console.log('the port is listening on 4000')
})

// getting express 
const express =require('express')
const cockieParser =require('cookie-parser')//after installing coockie-parser for third party middleware

//making an app object with express.json() function
const app = express()
  
// P A R T S 6 MIDDLEWARE---------------------------

// application level middleware--------------------------------------
/* const myMiddleware =(req,res,next)=>{
    console.log('i am loggin')
    next()//this will send next function to reach the response
} */
//use myMiddleware in app object for call 
/* app.use(myMiddleware) */
//---------------------------------------------------------
/* const logger =(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl}- ${req.ip}`)
    //res.end()
    //next('test') //when we put any data into the next function it will appear an error in req from body of postman
    next()
}
app.use(logger) */


// router level middleware----------------------------------
/* 
const adminRout = express.Router() // making a admin router

const logger =(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl}- ${req.ip}`)
    next()
}
adminRout.use(logger) //logger middleware is use inside adminrouter 
 
     adminRout.get('/dashboard',(req,res)=>{
         res.send('dashboard')
     }) 
   
    app.use('/admin',adminRout)// making a sub admin
    // now call url http://localhost:4000/admin/dashboard from postman it will no error a console log will appear at console data
    // if i call like http://localhost:4000/about it will not console anything
 */

// builtin middleware app.use(express.json())--------------------------------------------

// middleware as a THIRD PARTY MIDDLEWARE COOCKI-PARSER --------------------------

// error handling middleware--------------------------------------------------

const adminRout = express.Router() // making a admin router

const logger =(req,res,next)=>{
    console.log(`${new Date(Date.now()).toLocaleString()} - ${req.method} - ${req.originalUrl}- ${req.ip}`)
    //next()
    throw new Error('there is an error occoured') //throwing an error for handling 
}
adminRout.use(logger) //logger middleware is use inside adminrouter 
 
     adminRout.get('/dashboard',(req,res)=>{
         res.send('dashboard')
     }) 
   
    app.use('/admin',adminRout)// making a sub admin

    // now making an error handling middleware for catching the thrown error form 57 
    const errorMiddleware =(err,req,res,next)=>{
        console.log(err.message)
        res.status(500).send('this is a server side error')
    }

    app.use(errorMiddleware) // after call http://localhost:4000/admin/dashboard a server side error msg will shown in console. if error handled not taken app will be crashed!!









app.get('/about',(req,res)=>{
    res.send('this is home page with get request')
})
//set a post router
 app.post('/',(req,res)=>{   
    res.send('this is home page with post request')
    
})


//setting a listener for runnig the server
app.listen(4000,()=>{
    console.log('the port is listening on 4000')
})

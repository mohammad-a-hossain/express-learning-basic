
 // SYNCHRONOUS WAY ERROR HANDLING ------------------
// getting express 
const express =require('express')



//making an app object with express.json() function
const app = express()
  
// how to throw an error
/* app.get('/',(req,res)=>{
    throw new Error('there is an error')
}) */
//get an error
/*  app.get('/',(req,res)=>{
    res.send(q) // this error will handle by no 19 line of code
}) */
// an error receiving middleware it is must be last middleware function error after this there should not middleware error exist
//this error is at bootom of page sychronous error will indicate this function when get an error
/* app.use((err,req,res,next)=>{

    // console.log('error handling') // first it give a console error 
    // res.send('this error handling by middleware')// then it give a response of error occured in line 15
    //  we can also send the error for next middleware by catching declare a next function with a message
  /*   next('error will handle next middleware') */
//     if(err.message){
//         res.status(500).send(err.message)
//     }else{
//        res.status(500).send('there is an error')// we can set status code with error message
//     }
// ) 
 
//setting a listener for runnig the server
 app.listen(4000,()=>{
    console.log('the port is listening on 4000')
})
 
// getting express 
const express =require('express')

//making an app object with express.json() function
const app = express()

//when a request send from body content type 	"application/octet-stream" we will get a buffer object
//app.use(express.raw())

//declaring express for using data json object from the body by postman or browser
//and postman must declare the header content type is application/json

// when we send content type 	"application/json"
/* app.use(express.json()) */

// when we send a text into the request 
/* app.use(express.text()) */

// when we send data from url encode form data we use express.urlencoded()
/* app.use(express.urlencoded()) */

// if a request in url for a static file generate or show in domein name/.... 
/* app.use(express.static(`${__dirname}/public/`)) */
//if i call a home.html page
app.use(express.static(`${__dirname}/public`,{
    index:'home.html'
}))

//set a get router
app.get('/',(req,res)=>{
 
    res.send('this is home page')
})

//set a post router
app.post('/',(req,res)=>{   
    // can access every object from post by .notaion for object access
    console.log(req.body.lastName)
    console.log(req.body)//a buffer will come out
    //console.log(req.body.toString()) // get the buffer to a string
    res.send('this is home page with post request')
})


//setting a listener for runnig the server
app.listen(4000,()=>{
    console.log('the port is listening on 4000')
})

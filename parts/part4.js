// getting express 
const express =require('express')

//making an app object with express.json() function
const app = express()
      app.use(express.json()) // using a parser for post a data and get parsing data from body


// part 4 -------------------------------------------------
//making an request for admin working for req.baseUrl()
const adminRouter = express.Router()
     adminRouter.get('/dashboard/',(req,res)=>{
         console.log(req.baseUrl)// getting baseUrl /admin
         console.log(req.originalUrl)//http://localhost:4000/admin/dashboard
         console.log(req.url)// http://localhost:4000/dashboard
         console.log(req.path)// path is after sub app /dashboard
         console.log(req.hostname)// localhost
         console.log(req.method)//get
         console.log(req.protocol)//http
         res.send('this is admin dashboard from admin')
     })
app.use('/admin',adminRouter)

 app.get('/user/:id',(req,res)=>{
     console.log(req.url)
     console.log(req.hostname)
     console.log(req.params)// it will give an object { id: '3' }
     console.log(req.params.id)// only id will appear 3
     console.log(req.query)
     console.log(req.secure) // response false if it is http request
     res.send('hello world test')

 })
 app.post('/user/',(req,res)=>{
    
    console.log(req.body)
    res.send('creating a user')

})


app.get('/',(req,res)=>{
    console.log(req.method)
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

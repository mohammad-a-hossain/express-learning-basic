// getting express 
const express =require('express')

//making an app object with express.json() function
const app = express()
    


// part 5 -------------------------------------------------


// 
app.set('view engine','ejs')
//page rendering and data variable send with res.local
// app.get('/about',(req,res)=>{
//     console.log(res.headersSent) //it return false 
//     res.render('pages/about',{
//         name:'aaron hossain' //using local variable sending to about page
        
//     })
//     console.log(res.headersSent)// it return true bcoz 
// })

// res.format() testing
 app.get('/data',(req,res)=>{
     res.format({
      'text/plain':()=>{
          res.send('hi this is plain text')
      },
      'text/html':()=>{
          res.render('pages/about',{
              name:'aaron hossain labin'
          })
      },
      'application/json':()=>{
          res.send({
              name:'suhel',
              age:33,
              address:'sylhet'
          })
      },
      default:()=>{
          res.status(406).send('not found')
      }
     })
 })

   app.get('/cook',(req,res)=>{
       res.cookie('name','a cocky is set')
       res.end()
   })
   app.get('/location',(req,res)=>{
       res.location('/test')
       res.end()
   })
   app.get('/contact',(req,res)=>{
       res.send('hello this is contact page')
   })
   app.get('/hello',(req,res)=>{
    res.redirect('/contact')
    res.end()
})
app.get('/data',(req,res)=>{
   // res.send('this is a get data')
   // res.end()//ending response without data
   res.json({
       name:'aaron',father:'a hossain'
   })
})
//set a post router
 app.post('/',(req,res)=>{   
    res.send('this is home page with post request')
    
})


//setting a listener for runnig the server
app.listen(4000,()=>{
    console.log('the port is listening on 4000')
})

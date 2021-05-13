// getting express 
const express =require('express')

//making an app object with express.json() function
const app = express()
//making a admin app object part3


/*   F O R P A R T ONE AND TWO 
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
/* app.use(express.static(`${__dirname}/public`,{
    index:'home.html'
})) 
 F O R P A R T ONE AND TWO END

*/

// app.locals.title='my app running' // can use anywhere in app when get method call in postman/browser 
/* const admin =express() */// making a admin app object for admin
// admin.mountpath() make a object or app for sub app
/* admin.get('/dashboard',(req,res)=>{
    //examin admin mountpath 
    console.log(admin.mountpath)
    res.send('welcome to admin page')
}) */
//if we call http://localhost:4000/admin/dashboard/ from postman we will get admin page 
//calling admin app.mountpath()
  /* app.use('/admin',admin) */

// method app.all()
/* app.all('/',(req,res)=>{
    res.send('its a app.all function can call from any body')
}) */
/* app.delete('/', function (req, res) {
    res.send('DELETE request to homepage')
  }) */

  //app.enable('case sensitive routing')
  //app.disable('case sensitive routing')
/*   app.get('/about',(req,res)=>{ // if anyone call About from get url it will error
      res.send('this is about page')
  }) */

  //app.rout()
/*  app.route('/events/name')
    .get((req,res)=>{
     res.send('this is events name get page')
    })
    .post((req,res)=>{
        res.send('this is post page for events')
    })
    .put((req,res)=>{
        res.send('this is put page for events')
    })
    .delete((req,res)=>{
        res.send('this is delete page for events')
    })
    */
   // setting view engin 
   app.set('view engine','ejs')//after installing ejs
   app.get('/see',(req,res)=>{//when i hit see url the index page will render from postman
     res.render('index')
 }) 

//set a get router
/* app.get('/',(req,res)=>{
   //console.log(req.app.locals.title)// req will get local var
    res.send('this is home page')
}) 
 */
//set a post router
app.post('/',(req,res)=>{   
    res.send('this is home page with post request')
})


//setting a listener for runnig the server
app.listen(4000,()=>{
    console.log('the port is listening on 4000')
})

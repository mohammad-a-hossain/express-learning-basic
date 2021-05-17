const express = require('express')

const publicrouter = express.Router()


/* const logg = (req,res,next)=>{
    console.log('im logging here')
    next()
} */



/* publicrouter.get('/about',(req,res)=>{
    res.send('this is about  page with public')
}) */
//setting a middleware
/* publicrouter.param('user',(req,res,next,id)=>{
    req.user = id==='1' ? 'admin':'anonymouse'
    console.log('i am call once')
    next()
})
 */
/* publicrouter.get('/:user',(req,res)=>{
    res.send(`hello ${req.user}`)
})
 */
// if we set publicrout logg after above route at first public route .get('/about') will call 
/* publicrouter.get('*',logg) */

// ruter.route()
publicrouter.route('/user').all((req,res,next)=>{
    console.log('i am logging for all router.route function')
    next()
    

})
.get((req,res)=>{
    res.send('get here')
})
.post((req,res)=>{
    res.send('post here')
})
.put((req,res)=>{
    res.send('put here')
})
.delete((req,res)=>{
    res.send('delete here')
})


//set a post router
 publicrouter.post('/login',(req,res)=>{   
    res.send('this is public page login')
    
})



module.exports = publicrouter
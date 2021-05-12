//row nodejs code for show
/* const http =require('http');
const { runInNewContext } = require('vm');

const server =http.createServer((req,res)=>{
    if(req.url ==='/'){
        res.write('this is home page')
        res.end();
    }else if(req.url === '/about' && req.method=== 'GET'){
        res.write('this is about page')
        res.end();
    }else{
        res.write('not foun page')
        res.end();
    }
})
server.listen(4000)
console.log('server is listen on port 4000') */
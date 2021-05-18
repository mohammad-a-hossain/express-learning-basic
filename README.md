
# learning description  --### credit goes to sumit saha
## part 1 _installation process_
---
### creating a basic server 
 first npm init **
** then npm i express **
** npm install --save-dev nodemon ** 
---
## part2 express functions
### function uses
1. **express.json()** 
2. **express.row()**
**for send a request from postman or browser using express.json()**
3. **express.text()** url encoded as a text a=name
4.  **express.urlencoded()** if a data send from a form 
**content type must be "application/x-www-form-urlencoded"**
5. **express.static()**
  ..*if a folder or file to use as a static then go for bellow system ->
  ..*make a folder in public and make a test folder in public and a home.html can call form url localhost/4000/test/
6. **express.router()** will another part
***
## part 3 working with application/methods
 1. **app.locals()** 
make another folder name local for a rout export local to index
 2. **app.mountpath()** 
can create multiple app object like as for admin panel a separate app object
 3. **event application**
 admin.on() to get the parent mount path
---
## methods
1. **app.all()**
2. **app.delete()**
3. **app.disable()** --use app setting if any request is case-sensitive off
4. **app.enable()** --use app setting if any request is case-sensitive on
5. **app.get()** --a for route
6. **app.set()** --can set a parameter app.set('title', 'my site' )
7. **app.listen()**
8. **app.param()** --it set an id parameter and response a object with id set
9. **app.path()**
10. **app.put()**
11. **app.patch()**
12. **app.post()**
13. **app.rout()**
14. **app.engin()**
--for engin method need a ejs templete ingin install > npm i ejs
--make a views folder and a index.ejs now set ejs in index and call from see ? "http://localhost:4000/see" route

---
# part 4 working with request object
***
1. **_baseUrl_** req.baseUrl() which rout of base it mounted a baseUrl is one but can have more sub url
2. **_originalUrl_** req.originalUrl()
3. **_url_** req.Url()
4. **_hostname** req.hostname()
5. **_method_** req.method()
6. **_protocol_** req.protocol()
7. **_params_** req.params()
8. **_params.id_** req.params.id()
9. **_query_** req.query()
10. **_body_** req.body() if send no body it will give undefined
10. **_qooqies_** req.cookies()
for this need a cookie parser install ---> npm i cookie-parser and import in index and use it for settitn cookies
11. **_sequre_** req.secure() false
12. **_app_** req.app()
13. **_accept_** req.accepts() // u can mentioned in header for accept a request data allowing 
---
# part 5 work with response object //-- represent the http response

1. **res.app()** // reference of app instance
2. **res.headersent()** // it return boolean if response header is sent or not
3. **_res.render()_** it will render a views engin page from view 
npm i ejs for view engin
4. **_res.local()** it will combine work with res.render page sending a data or variable
5. **_res.headersent()_** test the headersent is yes or not
6. **_res.end()_** 
7. **_res.json()_** it will represent a json data
8. **_res.status()_**
9. **_res.sendStatus()_** it will set status and end the response
10. **_res.format()_**  can send different type of header accept and response 
11. **_res.coockey()_** 
12. **_res.location()_** 
13. **_res.redirect()_** 
14. **_res.set()_** 

---
# part 6 work with middleware
**charecterstick of middlewear**
 1. middleware work after a request come from client and it has function with next() middleware and finally reach to response . 
 2. Also middleware handle error and it solve the error and send to response to client
  3. it can change the request and response 
 4. it can end req res  from any cycle
  5. it can call a next anytime for another function
 6. it can  throw catch and error
 ## **types of Middleware**
 ---
 **1. _application level middleware_** 
 **2. _router level middleware_**
 **3. _error handling middleware_**
 **4. _built in middleware_** --> app.use(express.json())
 **5. _third party middleware_**
 --for third party middleware library use coocki-parser (npm i cookie-parser) need install cookie-parser and require it

---
# part 7 work with router 
** EXPRESS.ROUTER()
**making a folder for public router and private/adminrouter and call from index page
--app.use('/admin',adminrouter) adminrouter object 
--app.use('/',publicrouter) public router object
## router methods
1. **_router.all()_**
2. **_router.param()_**
3. **_app.route()_**
4. **_router.route()_**
5. **_router.use()_**
6. **_router.path()_**
---
# part 8 error handling
1. **_asynchronous error handling_**


2. **_synchronous error handling_**
_--when a error get from synchronous way then he send the  default middle ware to handle the error 
and this middle ware handle the error and process to give the response to the client_
_-- it set last middleware at the bootom of app so that it can catch the error easily to handle_
_--error handling middleware recieve 4 parameter (err, req,res,next ) this parameter function is called in 
express error handling middleware_

_--if we start our server production mode the stack of error will not seen_
_--error seen only when we start our server in development mode_
_-- by default our server is run on development mode when we start at production environment the error is not shown_
_--a synchronous error will goto the middleware error to handle directly when a error occurred_






  


# works description
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
10. **_res.format()_** 

  

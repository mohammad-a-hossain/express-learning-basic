
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
**app.all()**
**app.delete()**
**app.disable()** --use app setting if any request is case-sensitive off
**app.enable()** --use app setting if any request is case-sensitive on
**app.get()** --a for route
**app.set()** --can set a parameter app.set('title', 'my site' )
**app.listen()**
**app.param()** --it set an id parameter and response a object with id set
**app.path()**
**app.put()**
**app.patch()**
**app.post()**
**app.rout()**
**app.engin()**
--for engin method need a ejs templete ingin install > npm i ejs
--make a views folder and a index.ejs now set ejs in index and call from see ? "http://localhost:4000/see" route


  

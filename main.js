const http =require("http");
const express =require('express');
const app = express();
const path =require('path');
const bodyParser = require('body-parser');
var session = require('express-session');
session.id=null;

// const login = require('./routes/login')
// const reg = require('./routes/reg');
const verify = require('./routes/verify')
const home = require('./routes/home')




app.use(bodyParser.urlencoded({extended :false}));
app.use(express.static(path.join(path.dirname(process.mainModule.filename))))

app.set('view engine','ejs'); 
app.set('views','views');

// app.use(login);
// app.use(reg);
app.use(verify)
app.use(home)




app.use((req,res,next)=>{
    res.status(404).send("<h1>SORRY PAGE NOT FOUND</h1>")
})
http.createServer(app).listen(7777);    
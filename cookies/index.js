const express=require('express')
const cookieParser = require("cookie-parser");
const { appendFile } = require("fs");
const port = 3000;

const app=express()
const oneDay=24*60*60*1000;

const obj =[{
    name:"technoelevate",
    email:"abc@techno.com"

},
{
    name:"testyantra",
    email:"abcdef@techno.com"
},{
    name:"google",
    email:"xyz@techno.com"
}]

//Cookie Parser Middleware
app.use(cookieParser());

//Reading Cookies
app.get('/read-cookie',(req,res)=>{
    console.log(req.cookies);
    if(req.cookies){
        res.send("Cookies exist"+" "+JSON.stringify(req.cookies))
    }
    else{
        res.send('Cookie does not exist')
    }
})

//Create a Non-persistent Cookie
app.get('/create-cookie',(req,res)=>{
    res.cookie('myname','Gopinath')
    res.send('non-persistent cookie has been created');
})

app.listen(port,()=>{
console.log(`server is listening on port ${port}`);
})

//create a Persistent Cookie
app.get('/create-pcookie',(req,res)=>{
    res.cookie('email','abc@gmail.com',{
        maxAge:60000

    })
    res.send('persistent cookie has been created');

})

// create persistent object cookie
app.get('/create-objcookie',(req,res)=>{
    res.cookie('data',{
          obj
},
        {
        maxAge:oneDay

    })
    res.send('one persistent cookie object has been created');

})

//clear a cookie
app.get('/clear-cookie',(req,res)=>{
    res.clearCookie("myname")
    res.send('myname cookie has been deleted')
})

//clear all cookies
app.get('/clear-allcookies',(req,res)=>{
    for(let cookie in req.cookie){
        res.clearCookie(cookie);
    }
    res.send('All Cookies have been deleted')
})


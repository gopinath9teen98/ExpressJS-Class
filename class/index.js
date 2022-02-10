const express=require('express');
const app=express();
const port = 3000;
const path=require('path')

//Middleware Functions
//builtin middleware functions
app.use(express.static('./public'))
// app.use(express.static('./private'))
app.use('/private', express.static('./private'))

app.use('/static', express.static('./files'))

//user defined middleware functions
const getDate=(req,res,next)=>{
    console.log('this is the first userdefined middleware');
    const date=Date.now();
    req.reqData=date;
    next();
}
const getMsg=(req,res,next)=>{
    console.log('this is the second user defined middleware function');
      res.msg='response object has been changed'
      console.log(res.msg);
    next();
}

app.use(getDate);
app.use(getMsg);

//using the user defined middleware
app.get('/getDate',(req,res)=>{
    res.send('hello world ' + new Date(req.reqData))
})

// const HandleClick = (req,res,next)=>{
//     console.log('handle click middlwware');
//     alert('HandleClick Middleware invoked')
//     next();
// }
// app.use(HandleClick)

app.get('/',(req,res)=>{
    res.send('this is from express server')
    res.send(res.msg)
})

app.get('/home',(req,res)=>{
    res.sendFile(path.join(__dirname,'home.html'))
})

app.get('/detail',(req,res)=>{
    res.send(`<h1>this is detail page</h1>
              <p> the current date and time is : ${new Date(req.reqData)} </p>
                <button onclick="alert('onclick called')">click me!</button>` )
})

app.get('/getMsg',(req,res)=>{
    // res.send('hello from getMsg')
    res.send(res.msg)
    
})

app.all('*',(req,res)=>{
    throw new Error("this path doesnt exist")
})
app.use((err,req,res,next)=>{
    res.send(res.err)
    next();
})

app.listen(port,()=>{
    console.log(`the server is running in port number : ${port} `);
})

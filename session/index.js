const express=require('express')
const exphbs=require('express-handlebars')
const cookieParser=require('cookie-parser')
const session=require('express-session')
const app=express()
const res = require('express/lib/response')
const port=4000
const uname='technoelevate'
const pwd='technoelevate'



const productsRoute=require('./routes/products')




app.get('/home',(req,res)=>{
    res.render('./landingpage.handlebars')
})



// body parser middleware
app.use(express.urlencoded({extended:true}))

//Router level Middleware
app.use('/products',productsRoute) 

//session level middler
app.use(session({
    secret:'thisisasecretkey',
    resave:false,
    saveUninitialized:true,
    cookie:{
        maxAge:8400000
    }
}))
 
    app.use(cookieParser())

    app.engine('handlebars',exphbs())
    app.set('view engine','handlebars')

    app.use(express.urlencoded({extended:true}))

    //user page
    app.get('/user',(req,res)=>{
        console.log(req.session)
        if(req.session.userid){
            res.render('./products.handlebars')
        }

    })


//login page
app.post('/login',(req,res)=>{
    let{username,password}=req.body
if(username===uname&&password===pwd){
    req.session.userid=username
    res.render('./landingpage.handlebars')

    res.redirect('/user')
}else{
    res.redirect('/')
}

})
app.get('/logout',(req,res)=>{
    req.session.destroy()
    res.redirect('/')
})
app.get('/',(req,res)=>{
    if(req.session.userid){
        res.redirect('/user')
}else{
    res.render('./login.handlebars')
}})
app.listen(port,()=>{
    console.log('server is listening')
    
})
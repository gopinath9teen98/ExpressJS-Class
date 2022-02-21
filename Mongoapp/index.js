const express=require('express')
const exphbs=require('express-handlebars')
const router=express.Router()
const mongoose=require('mongoose')
const port=4000;
const app=express();
const productRoutes=require('./routes/product')
const dbUrl= 'mongodb+srv://gopinath9teen98:gopinath@cluster0.ynio3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority' 
mongoose.connect(
    dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(err)=>{
        if(!err){
            console.log("db connected successfully")
        }else{
            console.log("db not connected")
        }
    }
)



//importing routes
const routes=require('./routes/product')
//setting up handelbars
app.engine('handlebars',exphbs());
app.set('view engine','handlebars');

//body parser middleware
app.use(express.urlencoded({extended:true}))

//Router level middleware
app.use('/products',productRoutes)

app.get('/',(req,res)=>{
    res.render('./landingpage.handlebars')
})

//error route
app.get('/error',(req,res)=>{
    res.status(500).send('something went wrong')
})
app.listen(port,(req,res)=>{
    console.log(`the server is listening on ${port}`);
})
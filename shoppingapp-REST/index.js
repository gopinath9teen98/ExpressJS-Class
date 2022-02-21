const express=require('express')
const mongoose=require('mongoose')
const port=400

const app=express();

const dbUrl='mongodb+srv://gopinath9teen98:gopinath@cluster0.ynio3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
mongoose.connect(
    dbUrl,{
        useNewUrlParser:true,
        useUnifiedTopology:true
    },(err)=>{
        if(!err){
            console.log('DB connected successfully')
        }
        else{
            console.log('DB not connect');
            // console.log(err);
        }
    }
)
const productRoutes=require('./routes/products');


//body parser middleware
app.use(express.urlencoded({extended:true}));

//json middleware
app.use(express.json());

//router level middleware
app.use('/products',productRoutes)

app.get('/error',(req,res)=>{
    res.status(500).send('something went wrong')
})

app.listen(port,()=>{
    console.log(`the server is listening on port ${port}`);
    
})
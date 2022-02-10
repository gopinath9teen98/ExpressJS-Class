const express=require('express')
const exphbs=require('express-handlebars')

const port=3000;

const app=express();
const productsRoute=require('./routes/products')

app.engine('handlebars',exphbs())
app.set('viewengine','handlebars')

let products=[
    {
        _id:1,
        pName:"Bag",
        pDesc:"wearable",
        price:1200
    }
] 

// body parser middleware
app.use(express.urlencoded({extended:true}))

//Router level Middleware
app.use('/products',productsRoute) 

app.get('/',(req,res)=>{
    res.render('./landingpage.handlebars')
})
// app.get('/products/products',(req,res)=>{
//     res.render('./products.handlebars',{products})
// })
// app.get('/products/add-products',(req,res)=>{
//     res.render('./add-products.handlebars')
// })

// //add the product
// app.post('/products/add-product',(req,res)=>{
//     console.log(req.body);
//     let {_id,pName,pDesc,price}=req.body;
//     _id=parseInt(_id);
//     price=parseInt(price);
//     products.push(
//         {
//             _id,
//             pName,
//             pDesc,
//             price
//         }
//     )
//     res.redirect('/products/products');
// })

// // edit the product

// app.get('/products/edit-product/:_id',(req,res)=>{
//     console.log(req.params._id);
//     _id=parseInt(req.params._id);
//     const index=products.findIndex((product)=>{
//         return parseInt(product._id)===parseInt(_id)
//     })
//     const selectedProduct=products[index]
//     res.render('./edit-product.handlebars',{selectedProduct})
// })

// app.post('/products/edit-product',(req,res)=>{
//     console.log(req.body);
//     let{_id,pDesc,pName,price}=req.body
//     _id=parseInt(_id);
//     price=parseInt(price);

//     const index=products.findIndex((product)=>{
//         return parseInt(product._id)===parseInt(_id)
//     })
//     products.splice(index,1,{_id,pDesc,pName,price})
//     res.redirect('/products/products')
// })

// //  delete the product
// app.get('/products/delete-product/:_id',(req,res)=>{
//     console.log(req.params._id);
//     _id=parseInt(req.params._id);
//     const index=products.findIndex((product)=>{
//         return parseInt(product._id)===parseInt(_id)
//     })
//     products.splice(index,1)
//     res.redirect('/products/products')
// })

app.listen(port,()=>{
    console.log(`this server is listening port ${port}`);
})

// const { Router } = require('express')
// const express=require('express');
// const { render } = require('express/lib/response');
// const router= express.Router;

// let products=[
//     {
//         _id:1,
//         pName:"Bag",
//         pDesc:"wearable",
//         price:1200
//     }
// ]

// router.get('/products',(req,res)=>{
//     res.render('./products.handlebars',{products})
// })

// render.post('/add-product',(req,res)=>{
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

// render.get('edit-product/:_id',(req,res)=>{
//     console.log(req.params._id);
//     _id=parseInt(req.params._id);
//     const index=products.findIndex((product)=>{
//         return parseInt(product._id)===parseInt(_id)
//     })
//     const selectedProduct=products[index]
//     res.render('./edit-product.handlebars',{selectedProduct})
// })

// render.post('edit-product',(req,res)=>{
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
// render.get('delete-product/:_id',(req,res)=>{
//     console.log(req.params._id);
//     _id=parseInt(req.params._id);
//     const index=products.findIndex((product)=>{
//         return parseInt(product._id)===parseInt(_id)
//     })
//     products.splice(index,1)
//     res.redirect('/products/products')
// })

// module.export={router}
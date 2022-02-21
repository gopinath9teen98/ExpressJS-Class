const express=require('express');
const router= express.Router();
var fs = require('fs');``


let products=[
    {
        _id:1,
        pName:"Bag",
        pDesc:"wearable",
        price:1200
    }
]

router.get('/products',(req,res)=>{
    // products=JSON.parse(fs.readFileSync('demo/text.txt'))
    res.render('./products.handlebars',{products})
})

router.get('/add-products',(req,res)=>{
    res.render('./add-products.handlebars',{products})
})

router.post('/add-product',(req,res)=>{
    console.log(req.body);
   
   
    let {_id,pName,pDesc,price}=req.body;
    _id=parseInt(_id);
    price=parseInt(price);
    products(
        {
            _id,
            pName,
            pDesc,
            price
        }
    )
    // fs.writeFileSync('demo/text.txt',JSON.stringify(products))
    res.redirect('/products/products');
})

router.get('/edit-product/:_id',(req,res)=>{
    console.log(req.params._id);
   _id=parseInt(req.params._id);
    const index=products.findIndex((product)=>{
        return parseInt(product._id)===parseInt(_id)
    })
    const selectedProduct=products[index]
    res.render('./edit-product.handlebars',{selectedProduct})
})

router.post('/edit-product',(req,res)=>{
    console.log(req.body);
    let{_id,pDesc,pName,price}=req.body
    _id=parseInt(_id);
    price=parseInt(price);

    const index=products.findIndex((product)=>{
        return parseInt(product._id)===parseInt(_id)
    })
    products.splice(index,1,{_id,pDesc,pName,price})
    res.redirect('/products/products')
})

//  delete the product
router.get('delete-product/:_id',(req,res)=>{
    console.log(req.params._id);
    _id=parseInt(req.params._id);
    const index=products.findIndex((product)=>{
        return parseInt(product._id)===parseInt(_id)
    })
    products.splice(index,1)
    res.redirect('/products/products')
})

module.exports=router;
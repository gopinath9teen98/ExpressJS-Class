const express=require('express')
const product=require('../models/product')

//Reading products
const getAllproducts=async(req,res,next)=>{
    try{
        const products= await product.find().lean();
        res.render('./products.handlebars',{products})

        res.json({
            error:false,
            message:"",
            data:products
        })
    } catch(err){
        next(err)
    }
}


//adding the product
const addProduct=async(req,res,next)=>{
    try{
        let{pName,pDesc,pPrice}=req.body
         res.render('./add-product.handlebars')
         pPrice=parseInt(pPrice);

         

        await product.insertMany([{
            pName,
            pDesc,
            pPrice
        }])
        res.json({
            error:false,
            message:"product as been added successfully",
            data:null 
        })
        res.redirect('/products/products')

    } catch(err){
        next(err)
        console.log(err)
    }
}

//edit a product

const editProduct = async(req,res,next)=>{
    try{
        const productToEdit=await product.findOne({_id:req.params._id}).lean()

        let{_id,pName,pDesc,pPrice}=req.body;
        res.render('./edit-product.handlebars',{
            selectedProduct:productToEdit
        })
    pPrice=parseInt(pPrice)

        await product.updateOne(
            {_id},{
                $set:{
                    pName,
                    pDesc,
                    pPrice
                }
            }
        )
        res.json(
            {
                error:false,
                message:"product has been updated",
                data:null

            }
        )
        res.redirect('/products/products')

    } catch(err){
        next(err)
        console.log(err)
    }

}

const deleteProduct = async(req,res,next)=>{
    let{_id}=req.body
    try{
        await product.deleteOne(
            {_id:_id}
            
        )
        res.json({
            error:false,
            message:"product has been deleted",
            data:null
        })
        res.redirect('/products/products')

    } 
    
    catch(err){
        next(err)
        console.log(err)
    }
}

module.exports={
    getAllproducts,
    addProduct,
    editProduct,
    deleteProduct
}
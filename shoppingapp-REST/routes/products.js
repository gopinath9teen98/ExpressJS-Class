const express=require('express')
const router = express.Router();

const productController=require('../controller/products')

router.get('/products', productController.getAllproducts);
router.post('/add-product',productController.addProduct);
router.put('/edit-product',productController.editProduct);
router.delete('/delete-product',productController.deleteProduct);


    module.exports=router;
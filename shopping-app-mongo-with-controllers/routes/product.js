const express=require('express')
const router = express.Router();

const productController=require('../controller/products')

router.get('/products', productController.getAllproducts);
router.get('/add-product',productController.addProduct);
router.post('/add-product',productController.addProduct);

router.get('/edit-product',productController.editProduct);
router.delete('/delete-product',productController.deleteProduct);





module.exports=router;
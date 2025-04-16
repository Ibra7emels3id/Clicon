const express = require('express');
const { AddProduct, GetAllProducts, DeleteProduct, GetProductDetails, EditProductId } = require('../controllers/Products');
const upload = require('../multer/multer');
const ProductRouter = express.Router();


ProductRouter.post('/product', upload.fields([
    { name: 'image_1', maxCount: 1 },
    { name: 'image_2', maxCount: 1 },
    { name: 'image_3', maxCount: 1 },
    { name: 'image_4', maxCount: 1 },
    { name: 'image_5', maxCount: 1 },
]), AddProduct);
ProductRouter.get('/products', GetAllProducts);
ProductRouter.delete('/product/:id', DeleteProduct);
ProductRouter.get('/product/:id', GetProductDetails);
ProductRouter.put('/product/:id', upload.fields([
    { name: 'image_1', maxCount: 1 },
    { name: 'image_2', maxCount: 1 },
    { name: 'image_3', maxCount: 1 },
    { name: 'image_4', maxCount: 1 },
    { name: 'image_5', maxCount: 1 },
]), EditProductId);


module.exports = ProductRouter;
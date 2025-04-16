const express  = require('express');
const { AddToCart, GetUserId, RemoveCartQuantity, removeItem, deleteItems } = require('../controllers/Cart');
const AllCartRouter = express.Router();

AllCartRouter.put('/user/cart/:id' , AddToCart)
AllCartRouter.put('/user/cart/remove-cart-quantity/:id' , RemoveCartQuantity)
AllCartRouter.put('/user/cart/remove-item/:id' , removeItem)
AllCartRouter.get('/user/:id' , GetUserId)
AllCartRouter.delete('/user/delete-items/:id' , deleteItems)





module.exports = AllCartRouter;
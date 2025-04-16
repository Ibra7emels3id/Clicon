const { AddOrder, GetOrder, GetOrderId, GetOrderDetails, GetAllOrders, GetOrderDetailsId, EditOrder, GetAllTrack, DeleteTrack } = require('../controllers/Order');

const AllOrderRouter = require('express').Router()

AllOrderRouter.post('/order-payment/:id', AddOrder);
AllOrderRouter.get('/order-payment/:id', GetOrder);
AllOrderRouter.post('/order/track', GetOrderId);
AllOrderRouter.get('/order/track/:id', GetOrderDetails);
AllOrderRouter.get('/orders', GetAllOrders);
AllOrderRouter.get('/order/:id', GetOrderDetailsId);
AllOrderRouter.put('/edit-order/:id', EditOrder);
AllOrderRouter.get('/tracks', GetAllTrack);
AllOrderRouter.get('/tracks', GetAllTrack);
AllOrderRouter.delete('/track/:id', DeleteTrack);









module.exports = AllOrderRouter;
const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
    user_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true
    },
    items: [
        {
            productId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'Product',
                required: true
            },
            quantity: {
                type: Number,
                required: true
            },
            total_price: {
                type: Number,
                required: true
            },
        }
    ],
    total_price: {
        type: Number,
    },
    quantity: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['Pending', 'Packing', 'Shipped', 'Out for delivery', 'Completed', 'Cancelled'],
        default: 'Pending'
    },
    paymentIntentId: {
        type: String,
        required: true
    },
    paymentStatus: {
        type: String,
        enum: ['Pending', 'Paid'],
        default: 'Pending'
    },
    clientSecret:{
        type: String,
        required: true
    },
    orderNumber: {
        type: String,
        unique: true,
        default: () => 'ORD-' + Math.floor(1000000000 + Math.random() * 9000000000).toString()
    },
    address: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    country: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    date_paid:{
        type: Date,
        default: null
    },
    date_packing:{
        type: Date,
        default: null
    },
    date_shipped:{
        type: Date,
        default: null
    },
    date_delivered:{
        type: Date,
        default: null
    },
    date_cancelled:{
        type: Date,
        default: null
    },
    date_completed:{
        type: Date,
        default: null
    },
    deletedAt: {
        type: Date,
        default: null
    },
});

const Order = mongoose.Order || mongoose.model('Order', OrderSchema);
module.exports = Order;
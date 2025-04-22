const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    min_title: {
        type: String,
        required: false,
    },
    image_1: {
        type: String,
        required: true
    },
    image_2: {
        type: String,
        required: false
    },
    image_3: {
        type: String,
        required: false
    },
    image_4: {
        type: String,
        required: false
    },
    image_5: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: true
    },
    del_price: {
        type: Number,
        required: false
    },
    discount: {
        type: Number,
        required: false,
        default: 0
    },
    count: {
        type: Number,
        required: false
    },
    reviews: [
        {
            name: {
                type: String,
                required: true,
                default: null
            },
            email: {
                type: String,
                required: true,
                default: null
            },
            image: {
                type: String,
                required: true,
                default: null
            },
            rating: {
                type: Number,
                required: true,
                min: 1,
                max: 5,
                default: null
            },
            comment: {
                type: String,
                required: true,
                default: null
            },
            date: {
                type: Date,
                default: Date.now,
            },
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                default: null
            },
        }
    ],
    size: [],
    category: {
        name: {
            type: String,
            required: true
        },
        min_category: {
            type: String,
            required: true
        }
    },
    product_information: [
        {
            title: {
                type: String,
                required: false,
            },
            content: {
                type: String,
                required: false
            }
        }
    ],
    quantity:{
        type: Number,
        required: true,
        default: 0
    },
    description: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    update_product: {
        type: Date,
        default: Date.now
    },
    inStock:{
        type: Boolean,
        default: true
    }
});

const Product = mongoose.Product || mongoose.model('Product', ProductSchema);
module.exports = Product;

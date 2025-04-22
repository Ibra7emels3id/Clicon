const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    role: {
        type: String,
        default: "user",
        enum: ["user", "admin"],
    },
    isActive: {
        type: Boolean,
        default: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    isBlock: {
        type: Boolean,
        default: false,
    },
    cart: {
        total_price: {
            type: Number,
            default: 0,
        },
        quantity: {
            type: Number,
            default: 0,
        },
        items: [],
    },
    wishlists: {
        quantity: {
            type: Number,
            default: 0,
        },
        items: [],
    },
    country: {
        type: String,
        default: '',
    },
    image: {
        type: String,
        required: false
    },
    city: {
        type: String,
        default: ''
    },
    zip_code: {
        type: String,
        default: ''
    },
    address: {
        type: String,
        default: null,
    },
    phone: {
        type: String,
        default: null,
    },
    repo: [
        {
            total_price: {
                type: Number,
                default: 0,
            },
            quantity: {
                type: Number,
                default: 0,
            },
            createdAt: {
                type: Date,
                default: Date.now,
            },
            updatedAt: {
                type: Date,
                default: Date.now,
            },
            isBlock: {
                type: Boolean,
                default: false,
            },
            items: [
                {
                    type: mongoose.Schema.Types.ObjectId,
                    ref: 'Product',
                },
            ],
        },
    ],
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }],
    socialAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SocialAccount' }],
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);

module.exports = User;
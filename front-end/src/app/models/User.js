import mongoose from "mongoose";

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
        select: false,
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
        items: [{
            product_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
            quantity: { type: Number, default: 1 },
        }],
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
        required: false, 
    },
    image: {
        type: String,
        required: false, 
    },
    city: {
        type: String,
        required: false, 
    },
    zip_code: {
        type: String,
        required: false, 
    },
    address: {
        type: String,
        default: null,
        required: false, 
    },
    phone: {
        type: String,
        default: null,
        required: false, 
    },
    orders: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Order' }],
    reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Review' }],
    notifications: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Notification' }],
    socialAccounts: [{ type: mongoose.Schema.Types.ObjectId, ref: 'SocialAccount' }],
});

const User = mongoose.models.User || mongoose.model("User", UserSchema);
export default User;
const mongoose = require('mongoose');


const blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    image_parson: {
        type: String,
        required: false,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    },
    name:{
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    facebook: {
        type: String,
        required: false,
    },
    instagram: {
        type: String,
        required: false,
    },
    twitter: {
        type: String,
        required: false,
    },
    linkedIn: {
        type: String,
        required: false,
    },
    whatsApp: {
        type: String,
        required: false,
    },
    youtube: {
        type: String,
        required: false,
    },
    date: {
        type: String,
        required: true,
        default: Date.now,
    },
    category: {
        type: String,
        required: true,
    },
    comment: [
        {
            user_id: {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'User',
                required: true,
            },
            email: {
                type: String,
                required: true,
            },
            comment: {
                type: String,
                required: true,
            },
            date: {
                type: Date,
                default: Date.now,
            }
        }
    ],
});

const Blog = mongoose.Blog || mongoose.model('Blog', blogSchema);
module.exports = Blog;
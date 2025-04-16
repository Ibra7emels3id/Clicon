const mongoose = require('mongoose');

const CategorySchema = new mongoose.Schema({
    category: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true
    },
    min_category: [],
    date: {
        type: Date,
        default: Date.now,
        required: true,
    },
    updated_at: {
        type: Date,
        default: Date.now,
        required: true
    }
})

const Category = mongoose.Category || mongoose.model('Category', CategorySchema);
module.exports = Category;
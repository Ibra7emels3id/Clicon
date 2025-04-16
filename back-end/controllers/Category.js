const cloudinary = require("cloudinary").v2
const Category = require("../model/Category");

// Add Category
const AddCategory = async (req, res, next) => {
    try {
        const category = await Category.findOne({ category: req.body.category })
        if (category) return res.status(400).json({ message: 'Category already exists' })

        // Upload image to Cloudinary
        const result = await cloudinary.uploader.upload(req.file.path)
        const newCategory = new Category({
            ...req.body,
            image: result.secure_url
        })
        await newCategory.save();
        return res.status(201).json({ message: 'Category added successfully', newCategory });
    } catch (error) {
        next(error)
    }
};

// Get All Categories
const GetCategories = async (req, res, next) => {
    try {
        const categories = await Category.find({});
        res.json(categories);
    } catch (error) {
        next(error);
    }
};

// Delete Category 
const DeleteCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndDelete(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.json({ message: 'Category deleted successfully' });
    } catch (error) {
        next(error);
    }
};

// Get Category Id
const GetCategoryId = async (req, res, next) => {
    try {
        const category = await Category.findById(req.params.id);
        if (!category) return res.status(404).json({ message: 'Category not found' });
        res.json(category);
    } catch (error) {
        next(error);
    }
};

// Update Category
const EditCategory = async (req, res, next) => {
    try {
        const category = await Category.findByIdAndUpdate(req.params.id, {
            ...req.body,
            updatedAt: Date.new,
            image: req.body.image || (req.file && (await cloudinary.uploader.upload(req.file.path)).secure_url)
        }, { new: true });
        res.status(201).json({ message: 'Update Category successful', category });
    } catch (error) {
        next(error);
    }
};


// Handle Export 
module.exports = {
    AddCategory,
    GetCategories,
    DeleteCategory,
    GetCategoryId,
    EditCategory,
}
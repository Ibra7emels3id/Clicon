const Product = require("../model/Product");
const cloudinary = require("cloudinary").v2

// Add New Product
const AddProduct = async (req, res, next) => {
    try {
        // Upload Image Cloudinary
        const result_1 = await cloudinary.uploader.upload(req.files.image_1[0].path)
        const result_2 = await cloudinary.uploader.upload(req.files.image_2[0].path)
        const result_3 = await cloudinary.uploader.upload(req.files.image_3[0].path)
        const result_4 = await cloudinary.uploader.upload(req.files.image_4[0].path)
        const result_5 = await cloudinary.uploader.upload(req.files.image_5[0].path)
        // New Product 
        const product = new Product({
            ...req.body,
            image_1: result_1.secure_url,
            image_2: result_2.secure_url,
            image_3: result_3.secure_url,
            image_4: result_4.secure_url,
            image_5: result_5.secure_url,
        })
        // Save Product to DB
        await product.save();
        res.status(201).json({ message: "Product added successfully", product });
    } catch (error) {
        next(error);
    }
};

// Edit Product
const EditProductId = async (req, res, next) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            ...req.body,
            image_1: req.body.image_1 || req.files.image_1[0] && (await cloudinary.uploader.upload(req.files.image_1[0].path)).secure_url,
            image_2: req.body.image_2 || req.files.image_2[0] && (await cloudinary.uploader.upload(req.files.image_2[0].path)).secure_url,
            image_3: req.body.image_3 || req.files.image_3[0] && (await cloudinary.uploader.upload(req.files.image_3[0].path)).secure_url,
            image_4: req.body.image_4 || req.files.image_4[0] && (await cloudinary.uploader.upload(req.files.image_4[0].path)).secure_url,
            image_5: req.body.image_5 || req.files.image_5[0] && (await cloudinary.uploader.upload(req.files.image_5[0].path)).secure_url,
        }, { new: true });
        if (!updatedProduct) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product update successfully" });
    } catch (error) {
        next(error);
    }
};

// Get All Products
const GetAllProducts = async (req, res, next) => {
    try {
        const products = await Product.find();
        res.json(products);
    } catch (error) {
        next(error);
    }
};

// Delete Product
const DeleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByIdAndDelete(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.status(200).json({ message: "Product deleted successfully" });
    } catch (error) {
        next(error);
    }
};

// Get product details
const GetProductDetails = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        if (!product) return res.status(404).json({ message: "Product not found" });
        res.json(product);
    } catch (error) {
        next(error);
    }
};


module.exports = {
    AddProduct,
    GetAllProducts,
    DeleteProduct,
    GetProductDetails,
    EditProductId,
};
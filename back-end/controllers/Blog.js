const Blog = require("../model/Blog")
const cloudinary = require("cloudinary").v2


// Add Blog
const AddBlog = async (req, res, next) => {
    try {
        // Handle Image Upload
        const result_1 = await cloudinary.uploader.upload(req.files.image[0].path)
        const result_2 = await cloudinary.uploader.upload(req.files.image_parson[0].path)

        // Create New Blog
        const newBlog = new Blog({
            ...req.body,
            image: result_1.secure_url,
            image_parson: result_2.secure_url,
        })
        const savedBlog = await newBlog.save()
        return res.status(200).json({ message: "Blog added successfully", blog: savedBlog })
    } catch (error) {
        next(error)
    }
}

// Get All Blogs
const GetAllBlog = async (req, res, next) => {
    try {
        const blogs = await Blog.find().sort({ createdAt: -1 })
        return res.status(200).json({ message: "Blogs fetched successfully", blogs })
    } catch (error) {
        next(error)
    }
}

// Edit Blog 
const EditBlogId = async (req, res, next) => {
    try {
        const blog = await Blog.findByIdAndUpdate(req.params.id, {
            ...req.body,
            image: req.body.image || req.files.image[0] && (await cloudinary.uploader.upload(req.files.image[0].path)).secure_url,
            image_parson: req.body.image_parson || req.files.image_parson[0] && (await cloudinary.uploader.upload(req.files.image_parson[0].path)).secure_url
        }, { new: true })
        if (!blog) return res.status(404).json({ message: "Blog not found" })
        return res.status(200).json({ message: "Blog updated successfully", blog })
    } catch (error) {
        next(error)
    }
};

// Get Blog Id
const GetBlogId = async (req, res, next) => {
    try {
        const blog = await Blog.findById(req.params.id)
        if (!blog) return res.status(404).json({ message: "Blog not found" })
        return res.status(200).json(blog)
    } catch (error) {
        next(error)
    }
}

// Delete Blog
const DeleteBlogId = async (req, res, next) => {
    try {
        const blog = await Blog.findByIdAndDelete(req.params.id)
        if (!blog) return res.status(404).json({ message: "Blog not found" })
        return res.status(200).json({ message: "Blog deleted successfully" })
    } catch (error) {
        next(error)
    }
}


// Export the functions
module.exports = {
    AddBlog,
    GetAllBlog,
    EditBlogId,
    GetBlogId,
    DeleteBlogId,
}
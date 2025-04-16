const User = require("../model/User");
const cloudinary = require("cloudinary").v2




// Get All Users
const GetAllUsers = async (req, res, next) => {
    try {
        const user = await User.find({})
        return res.json(user)
    } catch (error) {
        next(error)
    }
};


// Edit User
const EditUser = async (req, res, next) => {
    try {
        // Edit User 
        const user = await User.findByIdAndUpdate(req.params.id, {
            ...req.body,
            image: req.body.image || req.file.path && (await cloudinary.uploader.upload(req.file.path)).secure_url || '',   
            country: req.body.country || '',
            address: req.body.address || '',
            zip_code: req.body.zip_code || '',
            city: req.body.city || '',
            phone: req.body.phone || '',
        }, { new: true })
        if (!user) return res.status(404).json({ message: 'user not found' })
        return res.status(200).json({ message: 'Update User Succuss', user })
    } catch (error) {
        next(error)
    }
};


module.exports = {
    GetAllUsers,
    EditUser,
};
const User = require('../model/User')

// Add To repo
const AddToRepo = async (req, res, next) => {
    try {
        // check user 
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Push Items in the repo
        user.repo.push({
            quantity: req.body.quantity,
            total_price: req.body.total_price,
            items: req.body.items.map(item => item._id)
        });

        user.markModified('repo');
        // Handle Save Item
        await user.save();
        res.status(200).json({ message: 'Cart updated successfully', repo: user.repo });

    } catch (error) {
        next(error)
    }
}

// export 
module.exports = {
    AddToRepo
};
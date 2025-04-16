const User = require("../model/User");

const AddToWishlist = async (req, res, next) => {
    let { item } = req.body;
    try {
        // check if user is already
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: "User not found" });

        // check if product
        const product = await user?.wishlists?.items?.find((it) => it._id === item._id);

        if (product) {
            user.wishlists.items = user.wishlists.items.filter(wishlist => wishlist._id !== item._id);
            user.wishlists.quantity -= 1;
            // add product to wishlist
            user.markModified('wishlists')
            await user.save();
            return res.status(200).json({ message: "Remove to wishlist" });
        } else {
            user.wishlists.items.push(item);
            user.wishlists.quantity += 1;
            // add product to wishlist
            user.markModified('wishlists')
            await user.save();
            return res.status(200).json({ message: "Add to wishlist" });
        }
    } catch (error) {
        next(error);
    }
}


module.exports = {
    AddToWishlist
};
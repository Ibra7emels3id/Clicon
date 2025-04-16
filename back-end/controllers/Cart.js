const User = require("../model/User");
const Product = require("../model/Product");

const AddToCart = async (req, res) => {
    const { item } = req.body;
    try {
        // Check User 
        let user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Search Item for Product
        const CheckUserItem = user.cart.items.find(cartItem => cartItem._id === item._id);


        if (!CheckUserItem) {
            // Handle Save Item New 
            user.cart.items.push({ ...item, quantity: 1 });
        } else {
            // Handle Save Item Quantity
            CheckUserItem.quantity += 1;
            user.markModified('cart.items');
        }

        // Get Total Price
        user.cart.total_price += item.price;

        // total quantity 
        user.cart.quantity += 1;

        // Handle Save Item
        await user.save();
        res.status(200).json({ message: 'Cart updated successfully', cart: user.cart });

    } catch (error) {
        console.error('Error adding item to cart:', error);
        res.status(500).json({ message: 'Error adding item to cart' });
    }
};

// Get User Id
const GetUserId = async (req, res, next) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        res.json(user)
    } catch (error) {
        next(error);
    }
};

// Remove Item Quantity
const RemoveCartQuantity = async (req, res, next) => {
    const { itemId } = req.body;
    try {
        // Check User exists 
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });

        // Check Item in Cart
        const itemIndex = user.cart.items.find(item => item._id === itemId);
        if (!itemIndex) return res.status(404).json({ message: 'Item not found in the cart' });

        if (itemIndex.quantity <= 1) {
            // Handle Decrease Item Quantity
            user.cart.items = user.cart.items.filter(cartItem => cartItem._id.toString() !== itemId);
        } else {
            itemIndex.quantity -= 1
        }

        // Get Total Price
        user.cart.total_price -= itemIndex.price;

        // total quantity
        user.cart.quantity -= 1

        // Handle Save Item
        user.markModified('cart.items');
        await user.save();
        res.status(200).json({ message: 'Remove cart Quantity', cart: user.cart });

    } catch (error) {
        next(error);
    }
};

// Handle Remove Item
const removeItem = async (req, res, next) => {
    const { itemId } = req.body;
    try {
        // Check User exists 
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        // Check Item in Cart
        const item = user.cart.items.find(item => item._id === itemId);
        if (!item) return res.status(404).json({ message: 'Item not found in the cart' });
        // Handle Delete Item
        user.cart.items = user.cart.items.filter(cartItem => cartItem._id !== itemId);

        // Get Total Price
        user.cart.total_price -= item.price * item.quantity;

        // total quantity
        user.cart.quantity -= item.quantity

        // Handle Save Item
        await user.save();
        res.status(200).json({ message: 'Item removed successfully', cart: user.cart });
    } catch (error) {
        next(error)
    }
};

// Handle Delete Items 
const deleteItems = async (req, res, next) => {
    try {
        // Check User exists
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'User not found' });
        // Handle Delete Items
        user.cart.items = [];
        // Get Total Price
        user.cart.total_price = 0;
        // total quantity
        user.cart.quantity = 0;
        // Handle Save Item
        await user.save();
        res.status(200).json({ message: 'Cart cleared successfully', cart: user.cart });
    } catch (error) {
        next(error);
    }
};


// export 
module.exports = {
    AddToCart,
    GetUserId,
    RemoveCartQuantity,
    removeItem,
    deleteItems,
};
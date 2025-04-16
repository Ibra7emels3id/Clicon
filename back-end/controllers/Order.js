const Order = require("../model/Order");
const Track = require("../model/Track");
const User = require("../model/User");
require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);




const AddOrder = async (req, res, next) => {
    try {
        const paymentIntent = await stripe.paymentIntents.create({
            amount: req.body.amount,
            currency: req.body.currency,
        });

        // Check if payment was successful
        if (paymentIntent.id) {
            // Handle Delete Cart From User
            const user = await User.findById(req.params.id);
            if (!user) {
                return res.status(404).json({ error: 'User not found' });
            }
            user.cart.items = [];
            // Get Total Price
            user.cart.total_price = 0;
            // total quantity
            user.cart.quantity = 0;
            // Handle Save Item
            await user.save();
            // Handle Save Item
        }

        // Handle Save Order
        const order = new Order({
            user_id: req.params.id,
            items: req.body.items.map(item => ({
                productId: item._id,
                quantity: item.quantity,
                total_price: item.price * item.quantity,
            })),
            total_price: req.body.amount,
            quantity: req.body.quantity,
            paymentIntentId: paymentIntent.id,
            paymentStatus: 'Paid',
            clientSecret: paymentIntent.client_secret,
            address: req.body.address,
            phone: req.body.phone,
            country: req.body.country,
            city: req.body.city,
            zip_code: req.body.zip_code,
            email: req.body.email,
        });

        // Save Order
        await order.save();
        res.status(200).json({ message: 'Order created successfully', order });
    } catch (error) {
        next(error)
    }
}


// Get order
const GetOrder = async (req, res, next) => {
    try {
        const order = await Order.find({ user_id: req.params.id }).populate('user_id', 'name email').populate('items.productId', 'image_1 title price quantity').sort({ createdAt: -1 });
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        next(error)
    }
}


// Get Order Id and Email
const GetOrderId = async (req, res, next) => {
    try {
        const order = await Order.findOne({
            orderNumber: `ORD-${req.body.orderNumber}`,
            email: req.body.email,
        }).populate('user_id', 'name email').populate('items.productId', 'image_1 title price quantity').sort({ createdAt: -1 });
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        // Check if Track Exists
        let track = await Track.findOne({ order_id: order.orderNumber });

        // Save New Track 
        if (!track) {
            track = new Track({
                userId: order.user_id._id,
                email: order.email,
                order_id: order.orderNumber,
            });
            await track.save();
        }
        // Return Order and Track
        res.status(200).json({ order, track });

    } catch (error) {
        next(error)
    }
};

// Get Order By Order Id
const GetOrderDetails = async (req, res, next) => {
    try {
        const order = await Order.findOne({
            orderNumber: `ORD-${req.params.id}`
        }).populate('user_id', 'name email').populate('items.productId', 'image_1 title price quantity').sort({ createdAt: -1 });
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        next(error)
    }
};

// Get All Orders
const GetAllOrders = async (req, res, next) => {
    try {
        const orders = await Order.find({}).populate('user_id', 'name email').populate('items.productId', 'image_1 title price quantity').sort({ createdAt: -1 });
        if (!orders) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(orders);
    } catch (error) {
        next(error)
    }
};

// Get Order Id
const GetOrderDetailsId = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id).populate('user_id', 'name email').populate('items.productId', 'image_1 title price quantity').sort({ createdAt: -1 });
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(200).json(order);
    } catch (error) {
        next(error)
    }
};

// Edit Order
const EditOrder = async (req, res, next) => {
    try {
        const order = await Order.findById(req.params.id);
        if (!order) {
            return res.status(404).json({ error: 'Order not found' });
        }
        if (req.body.data === 'Packing') order.date_packing = Date.now();
        if (req.body.data === 'Shipped') order.date_shipped = Date.now();
        if (req.body.data === 'Out for delivery') order.date_delivered = Date.now();
        if (req.body.data === 'Completed') order.date_completed = Date.now();
        if (req.body.data === 'Cancelled') order.date_cancelled = Date.now();
        // Update order status and date based on the status
        order.status = req.body.data;
        await order.save();
        res.status(200).json({ message: 'Order updated successfully', order });
    } catch (error) {
        next(error)
    }
};

// Get All Track
const GetAllTrack = async (req, res, next) => {
    try {
        const track = await Track.find({}).populate('userId', '_id name email').sort({ createdAt: -1 });
        if (!track) {
            return res.status(404).json({ error: 'Track not found' });
        }
        res.status(200).json(track);
    } catch (error) {
        next(error)
    }
};


// Delete Track
const DeleteTrack = async (req, res, next) => {
    try {
        const track = await Track.findByIdAndDelete(req.params.id);
        if (!track) {
            return res.status(404).json({ error: 'Track not found' });
        }
        res.status(200).json({ message: 'Track deleted successfully' });
    } catch (error) {
        next(error)
    }
};

// export
module.exports = {
    AddOrder,
    GetOrder,
    GetOrderId,
    GetOrderDetails,
    GetAllOrders,
    GetOrderDetailsId,
    EditOrder,
    GetAllTrack,
    DeleteTrack,
}
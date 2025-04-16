const express = require('express');
const { AddToWishlist } = require('../controllers/wishlist');

const ALlWishlist = express.Router();

ALlWishlist.put(`/user/wishlist/:id` , AddToWishlist)

module.exports = ALlWishlist;
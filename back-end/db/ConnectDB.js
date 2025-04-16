const mongoose = require("mongoose");
require("dotenv").config();


const ConnectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URL);
        console.log('MongoDB Connected...');
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
};

module.exports = ConnectDB;
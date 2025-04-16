import mongoose from "mongoose";

export const ConnectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.NEXT_MONGODB_URI);
        console.log(`MongoDB Connected: ${conn}`);
    } catch (err) {
        console.error(err.message);
        process.exit(1);
    }
}


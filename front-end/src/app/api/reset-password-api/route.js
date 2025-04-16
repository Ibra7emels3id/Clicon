import { ConnectDB } from "@/app/db/ConnectDB";
import User from "@/app/models/User";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs"

export async function POST(req) {
    try {
        // Connect to server
        await ConnectDB()

        // Validate request Json
        const { id, password } = await req.json();

        // Check User 
        const user = await User.findById(id).select("+password")
        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        // Validate password
        const resetPassword = await bcrypt.hash(password, 10)
        user.password = resetPassword;
        await user.save();

        return NextResponse.json({ message: "Password updated successfully" }, { status: 201 });
    } catch (err) {
        return NextResponse.json({ error: err.message }, { status: 404 });
    };
};
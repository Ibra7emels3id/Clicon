import { ConnectDB } from "@/app/db/ConnectDB";
import User from "@/app/models/User";
import { NextResponse } from "next/server";

export async function POST(req, res, next) {

    try {
        // Connect MongoDB
        await ConnectDB();
        const { id } = await req.json();
        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json({ message: "User not found" } , {status: 404});
        }
        user.isActive = true;
        await user.save();

        return NextResponse.json({ message: "User Verify successfully" }, {status: 201} ,  user);
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: "Server Error" } , {status: error.status});
    }
};
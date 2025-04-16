import { NextResponse } from "next/server";
import { ConnectDB } from "@/app/db/ConnectDB";
import User from "@/app/models/User";
import bcrypt from "bcryptjs";
import { SendEmail } from "../Email/SendEmail";

export async function POST(req) {
    try {
        // Connect MongoDB
        await ConnectDB();
        const { name, email, password } = await req.json();

        // Check if user already exists
        const user = await User.findOne({ email });
        if (user) {
            return NextResponse.json(
                { error: "User already exists" },
                { status: 400 }
            );
        }
        // Hash password
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create new user
        const newUser = new User({
            name,
            email,
            password: hashedPassword,
            phone: null,
            address: null,
        });
        await newUser.save();

        // send email verification link
        await SendEmail({
            to: email,
            subject: "Email Verification",
            text: `Please verify your email by clicking this link: ${process.env.NEXT_PUBLIC_URL_SITE}/User-Account/verify-email/${newUser._id}`,
        })

        // Return response
        return NextResponse.json({ message: "User created successfully" }, { status: 201 });
    } catch (e) {
        console.error(e);
        return NextResponse.json({ error: "Error processing request" }, { status: 500 });
    }
};
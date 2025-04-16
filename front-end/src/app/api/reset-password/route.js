import User from "@/app/models/User";
import { NextResponse } from "next/server";
import { SendEmailForgetPassword } from "../Email/SendEmailForgetPassword";

export async function POST(req, res) {
    try {
        // Validate request body
        const { email } = await req.json();

        // Check Email Address
        const user = await User.findOne({email});
        if(!user){
            return NextResponse.json({ message: "No registered email" }, { status: 409 });
        }
        // Send Email Message Forget Password
        SendEmailForgetPassword({
            email: user.email,
            subject: "Resat Password",
            text: `You can change your password from here.
            : ${process.env.NEXT_PUBLIC_URL_SITE}/User-Account/forget-password/${user._id}}`,
        })
        // Return Success Message
        return NextResponse.json({ message: "Email sent successfully" }, { status: 200 });

    } catch (err){
        return NextResponse.json({ message: "Server Error" } , {status: err.status})
    };
};
import { NextResponse } from 'next/server';
import { ConnectDB } from '@/app/db/ConnectDB';
import User from '@/app/models/User';
import bcrypt from "bcryptjs"


export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const { passwordNew } = await request.json();

        // Connect DB
        await ConnectDB()

        // Check User
        const user = await User.findById(id);
        if (!user) {
            return NextResponse.json({ message: 'User not found' }, { status: 404 });
        }

        // Hash Password
        const password = await bcrypt.hash(passwordNew, 10)
        user.password = password;
        await user.save();

        return NextResponse.json({ message: 'Password updated successfully' }, { status: 200 });
    } catch (error) {
        console.error(error);
        return NextResponse.json({ message: 'Server error' }, { status: 500 });
    }
}

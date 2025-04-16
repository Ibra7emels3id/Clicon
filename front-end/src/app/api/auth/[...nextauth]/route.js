import CredentialsProvider from "next-auth/providers/credentials";
import { ConnectDB } from "@/app/db/ConnectDB"
import User from "@/app/models/User";
import bcrypt from 'bcryptjs'
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github"
import jwt from "jsonwebtoken";



export const authOptions = {
    providers: [
        GithubProvider({
            clientId: process.env.NEXT_GITHUB_ID,
            clientSecret: process.env.NEXT_GITHUB_SECRET,
        }),
        CredentialsProvider({
            async authorize(credentials) {
                try {
                    // Connect DB 
                    await ConnectDB()
                    // check Email 
                    const user = await User.findOne({ email: credentials.email }).select("+password");
                    if (!user) {
                        throw new Error("User not found");
                    }

                    // Check password
                    const isValid = await bcrypt.compare(credentials.password, user.password);
                    if (!isValid) {
                        throw new Error("Invalid password");
                    }

                    // Set Token
                    const token = jwt.sign(
                        { id: user._id, email: user.email },
                        process.env.NEXT_SECRET,
                        { expiresIn: "7d" }
                    );

                    // Return user data
                    return {
                        id: user._id.toString(),
                        name: user.name,
                        email: user.email,
                        role: user.role,
                        date: user.date,
                        isActive: user.isActive,
                        cart: user?.cart,
                        country: user?.country,
                        image: user?.image,
                        address: user?.address,
                        city: user?.city,
                        zip_code: user?.zip_code,
                        token,
                    };
                } catch (error) {
                    throw new Error("Failed to authenticate user");
                }
            }
        })
    ],
    callbacks: {
        async session({ session, token }) {
            session.user.token = token.accessToken;
            session.user.id = token.id;
            session.user.name = token.name;
            session.user.role = token.role;
            session.user.email = token.email;
            session.user.date = token.date;
            session.user.isActive = token.isActive;
            session.user.cart = token.cart;
            session.user.country = token.country;
            session.user.image = token.image;
            session.user.address = token.address;
            session.user.city = token.city;
            session.user.zip_code = token.zip_code;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
                token.name = user.name;
                token.role = user.role;
                token.email = user.email;
                token.date = user.date;
                token.isActive = user.isActive;
                token.cart = user?.cart;
                token.country = user.country;
                token.image = user.image;
                token.address = user.address;
                token.city = user.city;
                token.zip_code = user.zip_code;
                token.accessToken = user.token;
            }
            return token;
        },
    },
    secret: process.env.NEXT_SECRET,
    jwt: {
        secret: process.env.NEXT_SECRET,
        encryption: true,
    },
}

const handler = NextAuth(authOptions)
export { handler as GET, handler as POST };
import { Inter } from "next/font/google";
import "./globals.css";
import StoreProvider from "./Provider/StoreProvider";
import Header from "./components/Header";
import Footer from "./components/Footer";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AuthProvider from "./Provider/AuthProvider";
import { Toaster } from 'sonner'

const geistSans = Inter({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});


export const metadata = {
    title: "CLICON",
    icons: {
        icon: '/favicon.ico',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body
                className={`${geistSans.variable} antialiased`}
            >
                <AuthProvider>
                    <StoreProvider>
                        <Header />
                        {children}
                        <Toaster />
                        <Footer />
                    </StoreProvider>
                </AuthProvider>
            </body>
        </html>
    );
}

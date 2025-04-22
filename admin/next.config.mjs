/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        domains: ['res.cloudinary.com' , 'res.cloudinary.com'],
    },
};

export default nextConfig;

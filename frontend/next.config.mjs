/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**', // Allows all hostnames
            },
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '8000',
            },
        ],
    },
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: true,
        serverComponentsExternalPackages: ["mongoose"],
    },
    images: {
        domains: ["media-amazon.com"],
        remotePatterns: [
            {
                protocol: "https",
                hostname: "*.amazon.com",
                port: "",
                pathname: "/images/I/**",
            },
        ],
    },
};

module.exports = nextConfig;

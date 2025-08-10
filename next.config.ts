import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true
    },
    webpack: (config, { isServer }) => {
        if (isServer) {
            config.resolve = config.resolve || {};
            config.resolve.alias = {
                ...(config.resolve.alias || {}),
                'next/server': 'next/server.js',
                'next/headers': 'next/headers.js',
            };
        }
        return config;
    },
};

export default nextConfig;
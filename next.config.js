/** @type {import('next').NextConfig} */
const nextConfig = {
    env: {
        WS_BASE_URL: process.env.WS_BASE_URL,
        HTTP_BASE_URL: process.env.HTTP_BASE_URL,
    }
}

module.exports = nextConfig

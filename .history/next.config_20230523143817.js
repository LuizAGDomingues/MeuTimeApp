/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["cdn.jsdelivr.net", "img.shields.io", "youtube.com"],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["media-3.api-sports.io"],
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ["https://media.api-sports.io/football/teams/"],
  },
}

module.exports = nextConfig

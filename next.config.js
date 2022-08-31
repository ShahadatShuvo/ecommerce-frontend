/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  images: {
    domains: ["http://localhost:1337", "http://127.0.0.1:1337"],
  },
};

module.exports = nextConfig;

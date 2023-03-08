/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["www.notion.so", "images.unsplash.com"],
    format: ["image/png", "image/webp", "image/jpeg"],
  },
};

module.exports = nextConfig;

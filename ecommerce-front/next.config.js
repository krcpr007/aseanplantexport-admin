/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["plant-ecommerce.s3.amazonaws.com"],
  },
}

module.exports = nextConfig

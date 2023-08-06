/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // appDir: false,
    appDir: true,
    fs: 'empty'
  },
};

module.exports = nextConfig;

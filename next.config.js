/** @type {import('next').NextConfig} */

// const { i18n } = require('./next-i18next.config.js');

const nextConfig = {

  experimental: { 
    appDir: true,
    serverActions: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // i18n,

};

module.exports = nextConfig;
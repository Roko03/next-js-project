/** @type {import('next').NextConfig} */
const path = require("path");

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
  },
  images: {
    domains: [
      "wired.com",
      "s.yimg.com",
      "consent.yahoo.com",
      "media.wired.com",
      "cdn.vox-cdn.com",
      "pokeapi.co",
      "i.guim.co.uk",
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

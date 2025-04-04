/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "raw.githubusercontent.com", // new pattern for GitHub
      },
    ],
  },
  experimental: {
    serverActions: {},
  },
  // experimental: {
  //   serverActions: true,
  // },
};

module.exports = nextConfig;

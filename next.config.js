/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    qualities: [50, 60, 70, 75, 80, 90, 95, 100],
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

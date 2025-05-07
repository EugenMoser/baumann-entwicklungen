/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "standalone",
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      // {
      //   protocol: 'https',
      //   hostname: 'images.unsplash.com'
      // },
    ],
  },
};

module.exports = nextConfig;

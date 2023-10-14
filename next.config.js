/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  // Optional: Add a trailing slash to all paths `/about` -> `/about/`
  // trailingSlash: true,
  // Optional: Change the output directory `out` -> `dist`
  // distDir: "dist",
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  // images: {
  //   remotePatterns: [
  //     // {
  //     //   protocol: 'https',
  //     //   hostname: 'images.unsplash.com'
  //     // },
  //   ],
  // },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'www.foodandwine.com',
      },
      {
        protocol: 'https',
        hostname: 'www.allrecipes.com',
      },
      {
        protocol: 'https',
        hostname: 'source.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'www.averiecooks.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.loveandlemons.com',
      },
    ],
  },
};

export default nextConfig;

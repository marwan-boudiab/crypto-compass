/** @type {import('next').NextConfig} */
const nextConfig = {
//   images: {
//     domains: ["cdn.coinranking.com", "www.coindesk.com"],
//   },


  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.coinranking.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'images.cointelegraph.com',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'cointelegraph.com',
        pathname: '**',
      },
    ],
  },
};

export default nextConfig;

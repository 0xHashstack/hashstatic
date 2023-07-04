/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/twitter',
        destination: 'https://twitter.com/0xHashstack',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/hashstack',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/0xhashstack',
        permanent: true,
      },
      {
        source: '/c2e',
        destination: 'https://zealy.io/c/hashstack/questboard',
        permanent: true,
      },
      {
        source: '/medium',
        destination: 'https://hashstack.medium.com',
        permanent: true,
      },
      
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;

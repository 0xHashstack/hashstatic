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
      {
        source:'/reddit',
        destination: 'https://www.reddit.com/r/0xHashstack/',
        permanent: true,
      },
      {
        source:'/docs',
        destination: 'https://docs.hashstack.finance/',
        permanent: true,
      },
      {
        source:'/youtube',
        destination: 'https://docs.hashstack.finance/',
        permanent: true,
      },
      {
        source:'/jobs',
        destination: 'https://angel.co/company/hashstack/jobs',
        permanent: true,
      },
      {
        source:'/logo',
        destination: 'https://drive.google.com/drive/folders/1MwIGFymRuE8FWGDRCJjPBQwNBjhX_Dro',
        permanent: true,
      },
      {
        source:'/status',
        destination: 'https://status.hashstack.finance/',
        permanent: true,
      },
      {
        source:'/whitepaper',
        destination: 'https://github.com/0xHashstack/whitepaper/blob/main/Open protocol/v0.2/Open protocol v0.2.7.pdf',
        permanent: true,
      },
      {
        source:'/blog',
        destination: ' https://blog.hashstack.finance',
        permanent: true,
      },
      
    ]
  },
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

module.exports = nextConfig;

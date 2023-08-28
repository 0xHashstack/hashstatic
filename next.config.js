/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  async redirects() {
    return [
      {
        source: '/blog',
        destination: 'https://blog.hashstack.finance',
        permanent: true,
      },
      {
        source: '/core',
        destination: 'https://github.com/0xHashstack',
        permanent: true,
      },
      {
        source: '/c2e',
        destination: 'https://zealy.io/c/hashstack/questboard',
        permanent: true,
      },
      {
        source: '/discord',
        destination: 'https://discord.gg/hashstack',
        permanent: true,
      },
      {
        source: '/docs',
        destination: 'https://docs.hashstack.finance',
        permanent: true,
      },
      {
        source: '/instagram',
        destination: 'https://instagram.com/0xhashstack',
        permanent: true,
      },
      {
        source: '/jobs',
        destination: 'https://angel.co/company/hashstack/jobs',
        permanent: true,
      },
      {
        source: '/linkedin',
        destination: 'https://in.linkedin.com/company/0xhashstack',
        permanent: true,
      },
      {
        source: '/logo',
        destination: 'https://drive.google.com/drive/folders/1ysun5L45Ib4MZAOGr8v9BK-CpZuMpXJr',
        permanent: true,
      },
      {
        source: '/medium',
        destination: 'https://hashstack.medium.com',
        permanent: true,
      },
      {
        source: '/reddit',
        destination: 'https://www.reddit.com/r/0xHashstack',
        permanent: true,
      },
      {
        source: '/status',
        destination: 'https://status.hashstack.finance',
        permanent: true,
      },
      {
        source: '/testnet',
        destination: 'https://testnet.hashstack.finance/v1',
        permanent: true,
      },
      {
        source: '/twitter',
        destination: 'https://twitter.com/0xHashstack',
        permanent: true,
      },
      {
        source: '/youtube',
        destination: 'https://www.youtube.com/@hashstack',
        permanent: true,
      },
      
    ]
  },
}

module.exports = nextConfig

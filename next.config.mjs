/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/firm',
        destination: 'https://wittfirm.framer.website/',
        permanent: true,
      },
      {
        source: '/(.*)',
        destination: 'https://wittcafe.framer.website/',
        permanent: true,
      },
      {
        source: '/',
        destination: 'https://wittcafe.framer.website/',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;

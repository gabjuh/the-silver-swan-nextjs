/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api-the-silver-swan.web4musicians.eu',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
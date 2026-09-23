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
  reactStrictMode: true,
  outputFileTracingRoot: __dirname,
  // No ESLint config in this project, so the build's lint step would try to
  // install and configure ESLint interactively and hang. Types are still checked.
  eslint: {
    ignoreDuringBuilds: true,
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const config = {
  typescript: {
    ignoreBuildErrors: true
  },
  eslint: {
    ignoreDuringBuilds: true
  },
  images: {
    remotePatterns: [{
      protocol: 'https',
      hostname: 'randomuser.me',
      pathname: '/api/**/*',
    }]
  }
};

export default config;

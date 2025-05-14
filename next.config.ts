/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    domains: ['github.com', 'linkedin.com', 'twitter.com'],
  },
}

export default nextConfig

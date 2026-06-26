/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/portfolio-redesign',
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}
export default nextConfig

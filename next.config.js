/** @type {import('next').NextConfig} */
const nextConfig = {
  // Produce a fully static site in the `out/` folder for Cloudflare Pages.
  output: 'export',
  images: {
    // Required for static export: there is no server to optimise images,
    // so they are served as-is from the source URL.
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
}

module.exports = nextConfig

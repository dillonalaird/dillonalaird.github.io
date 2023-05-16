// @ts-check
const isProd = process.env.NODE_ENV === 'production'

/**
 * @type {import('next').NextConfig}
 **/
const nextConfig = {
  output: 'export',
  basePath: isProd ? '/dillonalaird.github.io' : '',
  assetPrefix: isProd ? '/dillonalaird.github.io/' : '',
  images: {
    unoptimized: true,
  },
  experimental: {
    appDir: true,
  },
}

module.exports = nextConfig

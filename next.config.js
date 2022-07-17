const { i18n } = require('./next-i18next.config');

const nextConfig = {
  webpack5: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
  reactStrictMode: false,
  i18n,
}

module.exports = nextConfig

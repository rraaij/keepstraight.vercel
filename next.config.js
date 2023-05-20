const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl({
  reactStrictMode: true, // Recommended for the `pages` directory, default in `app`.
  swcMinify: true,
  experimental: {
    appDir: true,
  },
});

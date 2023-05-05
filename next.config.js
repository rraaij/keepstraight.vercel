const withNextIntl = require("next-intl/plugin")("./i18n.ts");

module.exports = withNextIntl({
  distDir: "build",
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    appDir: true,
  },
});

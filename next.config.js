const { withContentlayer } = require("next-contentlayer");

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    // @todo: switch to remotePatterns
    domains: ["tailwindui.com"],
    dangerouslyAllowSVG: true,
  },
};

module.exports = withContentlayer(nextConfig);

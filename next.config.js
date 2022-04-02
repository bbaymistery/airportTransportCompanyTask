/** @type {import('next').NextConfig} */
// const withSass = require("@zeit/next-sass");
const nextConfig = {};

module.exports = {
  reactStrictMode: true,

  images: {
    domains: ["images.unsplash.com"],
  },
};
// module.exports = withSass({});

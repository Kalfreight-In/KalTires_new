/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // swcMinify: true,

  // typescript: {
  //   // !! WARN !!
  //   // Dangerously allow production builds to successfully complete even if
  //   // your project has type errors.
  //   // !! WARN !!
  //   ignoreBuildErrors: true,
  // },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  env: {
    REACT_APP_GOOGLE_APIKEY: "AIzaSyCumu5B8e6vcRoLhKw1bpWxODsy2YiUtEk",
  },
  experimental: {
    nextScriptWorkers: false,
  },
  images: {
    domains: ["raw.githubusercontent.com"],
    unoptimized: true, // Disable Image Optimization API
  },
  publicRuntimeConfig: {
    BASE_URL: process.env.BASE_URL || "http://localhost:3000", // Add your production URL when deploying
  },
};

module.exports = nextConfig;

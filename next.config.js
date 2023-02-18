/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: { API_ENDPOINT: "https://gorest.co.in/public/v2" },
};

module.exports = nextConfig;

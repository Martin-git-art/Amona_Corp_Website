/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Conditionally set basePath and assetPrefix for production (GitHub Pages)
  basePath: process.env.NODE_ENV === 'production' ? "/Amona_Corp_Website" : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? "https://martin-git-art.github.io/Amona_Corp_Website" : '',

};

export default nextConfig;
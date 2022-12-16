/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  plugins: [
    // ...
  ],
  backgroundImage: {
    'loginImg': "url('./assets/images/Logo.png')",
  },
  images: {
    domains: ["upload.wikimedia.org","imgv3.fotor.com","miro.medium.com","fakestoreapi.com"]
  }
}

module.exports = nextConfig

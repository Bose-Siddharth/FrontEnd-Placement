const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'daus-one.s3.ap-south-1.amazonaws.comcv.jpg',
        port: '',
        pathname: '/uem-placement/**',
      },
    ],
  },
}

module.exports = nextConfig

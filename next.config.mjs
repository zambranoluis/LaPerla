/** @type {import('next').NextConfig} */


const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(mp4)$/,
      use: ['file-loader'],
    });
    return config;
  },
  // output: 'export'
};

export default nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { isServer }) => {
    // Add support for PDF files
    config.module.rules.push({
        test: /\.(pdf)$/,
        use: [
            {
                loader: 'file-loader',
                options: {
                    publicPath: '/_next/static/files/',
                    outputPath: `${isServer ? '../' : ''}static/files/`,
                    name: '[name].[ext]',
                },
            },
        ],
    });

    return config;
},
    images: {
        domains: ['images.unsplash.com'],
      },
};

export default nextConfig;

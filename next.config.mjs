/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: false,
  crossOrigin:'anonymous',
  headers:{
    'Access-Control-Allow-Origin':'*',
    'Access-Control-Allow-Methods':'GET,HEAD,PUT,PATCH,POST,DELETE',
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.resolve.fallback = {
        fs: false,
        path: false,
        os: false,
        ...config.resolve.fallback,
      };
    }

    config.module.rules.push({
      test: /ckeditor5-[^/]+\/theme\/icons\/[^/]+\.svg$/,
      use: ["raw-loader"],
    });

    config.module.rules.push({
      test: /ckeditor5-[^/]+\/theme\/[\w-/]+\.css$/,
      use: ["style-loader", "css-loader"],
    });

    return config;
  },
};

export default nextConfig;

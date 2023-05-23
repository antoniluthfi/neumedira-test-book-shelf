/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return {
      fallback: [
        {
          source: "/api/login",
          destination: "https://dummyjson.com/auth/login",
        },
        {
          source: "/api/books",
          destination:
            "https://643e8199c72fda4a0bf883df.mockapi.io/api/v1/books",
        },
        {
          source: "/api/books/detail/:path*",
          destination:
            "https://643e8199c72fda4a0bf883df.mockapi.io/api/v1/books/:path*",
        },
      ],
    };
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "loremflickr.com",
        port: "",
        pathname: "/640/480/**",
      },
      {
        protocol: "https",
        hostname: "robohash.org",
        port: "",
        pathname: "/**",
      },
    ],
  },
  // SVGR
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;

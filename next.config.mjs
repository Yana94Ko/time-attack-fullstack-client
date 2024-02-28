/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,

  images: {
    remotePatterns: [
      { protocol: "http", hostname: process.env.NEXT_PUBLIC_BASE_URL },
    ],
  },
  //   experimental: {
  //     missingSuspenseWithCSRBailout: false,
  //   },
};

export default nextConfig;

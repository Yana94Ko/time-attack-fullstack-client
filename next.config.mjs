/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: process.env.NEXT_PUBLIC_IMG_URL_PREFIX },
    ],
  },
  //   experimental: {
  //     missingSuspenseWithCSRBailout: false,
  //   },
};

export default nextConfig;

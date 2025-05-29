/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost" },
      { protocol: "https", hostname: "truongdev.site" },
      { protocol: "https", hostname: "luusytruong.xyz" },
      { protocol: "https", hostname: "luusytruong.id.vn" },
    ],
  },
  allowedDevOrigins: ["localhost", "192.168.100.250"],
};

export default nextConfig;

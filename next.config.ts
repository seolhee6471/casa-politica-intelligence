import type { NextConfig } from "next";

const allowedDevOrigins = [
  "127.0.0.1",
  "192.168.75.72",
  ...(process.env.ALLOWED_DEV_ORIGINS?.split(",").map((host) => host.trim()) ??
    []),
];

const nextConfig: NextConfig = {
  allowedDevOrigins: [...new Set(allowedDevOrigins)],
};

export default nextConfig;
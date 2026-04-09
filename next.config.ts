import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
   allowedDevOrigins: [
    'http://188.208.141.112:3000',
    'http://188.208.141.112:80',
    'http://188.208.141.112:3001',
    'http://188.208.141.112:5000',
     'http://localhost:3000',
  ],
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  eslint:{
    ignoreDuringBuilds:true,
   },
   typescript:{
    ignoreBuildErrors:true
   },
   images: {
    domains: ['books.google.com'], // add the domain you need
  },
};

export default nextConfig;

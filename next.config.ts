import type { NextConfig } from "next";
import { hostname } from "os";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,

  images:{
    remotePatterns:[
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "img.freepik.com",
      }
      ,
      {
        protocol: "https",
        hostname: "dummyimage.com",
      }
    ]
  }
};

export default nextConfig;

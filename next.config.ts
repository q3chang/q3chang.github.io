import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",  // 깃헙 페이지용 HTML 변환 옵션 (필수!)
  images: {
    unoptimized: true, // 이미지 깨짐 방지 (필수!)
  },
};

export default nextConfig;
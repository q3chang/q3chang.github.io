import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export', // 이건 원래 있었을 겁니다
  
  // 🔥 [이걸 추가해야 합니다!] 이미지 최적화 끄기 (Github Pages 필수 설정)
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
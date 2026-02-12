// 'use client';  <-- 이거 지웁니다! 이제 여긴 서버 땅입니다!

import AboutSection from '@/components/AboutSection';
import NewsSection from '@/components/NewsSection';
import PublicationsSection from '@/components/PublicationsSection';
import BlogSection from '@/components/BlogSection';

// 🔥 파일 읽는 도구 가져오기
import { getSortedPostsData } from '@/lib/posts';

export default function Home() {
  // 서버에서 마크다운 파일 읽어오기!
  const allPostsData = getSortedPostsData();

  return (
    <main className="bg-black text-white selection:bg-blue-500/30 relative">
      
      {/* 배경 오로라 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="hidden md:block absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-50" />
        <div className="hidden md:block absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-50" />
      </div>

      <AboutSection />
      <NewsSection />
      <PublicationsSection />
      
      {/* 🔥 읽어온 데이터를 블로그 섹션에 넘겨주기! */}
      <BlogSection posts={allPostsData} />

    </main>
  );
}

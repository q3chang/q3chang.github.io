import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image'; // 🔥 이미지 컴포넌트 추가!
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

// 1. 정적 경로 생성 (빌드용)
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  if (!posts || posts.length === 0) {
    return [{ id: 'hello' }];
  }
  return posts.map((post) => ({
    id: post.id,
  }));
}

// 2. 페이지 컴포넌트
type Props = {
  params: Promise<{ id: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { id } = await params;

  // 글이 없을 때 처리
  if (id === 'no-post') {
     return <div className="min-h-screen bg-black text-white pt-40 text-center">글이 없습니다 행님!</div>;
  }

  // 데이터 가져오기 (에러 처리 포함)
  let postData;
  try {
    postData = await getPostData(id);
  } catch (error) {
    return (
      <div className="min-h-screen bg-black text-white pt-40 px-10 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">🚨 글을 찾을 수 없습니다!</h1>
        <p className="text-gray-400">
          `posts` 폴더 안에 <b>{id}.md</b> 파일이 있는지 확인해주이소!<br/>
          (파일명이 <b>hello.md</b> 인지 꼭 확인!)
        </p>
        <Link href="/" className="inline-block mt-8 px-6 py-3 bg-blue-600 rounded-full">홈으로 가기</Link>
      </div>
    );
  }

  return (
    // 🔥 [수정] pt-32 제거 (이미지가 상단을 차지하므로)
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30 pb-20">

      {/* 🔥 [핵심 추가] 노션 스타일 커버 이미지 영역 */}
      {postData.image && (
        <div className="relative w-full h-[400px] md:h-[500px]">
          <Image
            src={postData.image}
            alt={postData.title}
            fill
            className="object-cover"
            priority // 중요한 이미지니까 가장 먼저 로딩!
          />
          {/* 이미지 하단 그라데이션 (제목이랑 자연스럽게 연결) */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
      )}

      {/* 배경 오로라 (위치 조정) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] opacity-40" />
      </div>

      {/* 🔥 [수정] 컨텐츠 영역 (이미지 유무에 따라 상단 여백 조정) */}
      <div className={`max-w-3xl mx-auto relative z-10 px-6 ${postData.image ? '-mt-32 pt-12' : 'pt-32'}`}>
        <Link href="/#blog" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors backdrop-blur-md bg-black/30 px-4 py-2 rounded-full border border-white/10">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>

        {/* 헤더 */}
        <div className="mb-12">
          {/* 카테고리 뱃지 (심플하게 변경) */}
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-blue-500/20 text-blue-300 border border-blue-500/30`}>
            {postData.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-white">{postData.title}</h1>
          <div className="flex items-center gap-6 text-gray-300 text-sm">
            <div className="flex items-center gap-2"><Calendar size={16} /> {postData.date}</div>
            <div className="flex items-center gap-2"><Clock size={16} /> {postData.readTime}</div>
          </div>
        </div>

        {/* 본문 (HTML로 변환된 마크다운) */}
        <div
          className="prose prose-invert prose-lg max-w-none prose-headings:text-blue-100 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </article>
  );
}
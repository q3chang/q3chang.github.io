import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

// 1. 정적 경로 생성
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

  if (id === 'no-post') {
     return <div className="min-h-screen bg-black text-white pt-40 text-center">글이 없습니다 행님!</div>;
  }

  let postData;
  try {
    postData = await getPostData(id);
  } catch (error) {
    return (
      <div className="min-h-screen bg-black text-white pt-40 px-10 text-center">
        <h1 className="text-2xl font-bold text-red-500 mb-4">🚨 글을 찾을 수 없습니다!</h1>
        <Link href="/" className="inline-block mt-8 px-6 py-3 bg-blue-600 rounded-full">홈으로 가기</Link>
      </div>
    );
  }

  return (
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30 pb-20">

      {/* 🔥 [핵심 수정] md(PC) 이상에서만 커버 이미지를 생성하고 로드합니다! */}
      {postData.image && (
        <div className="hidden md:block relative w-full h-[400px] md:h-[500px]">
          <Image
            src={postData.image}
            alt={postData.title}
            fill
            className="object-cover"
            priority 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>
      )}

      {/* 배경 오로라 (모바일에서는 블러 연산량을 줄이기 위해 투명도 조절) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[80px] md:blur-[120px] opacity-20 md:opacity-40" />
      </div>

      {/* 🔥 [핵심 수정] 모바일에서는 사진이 없으므로 항상 pt-32로 고정, PC에서만 -mt-32 적용! */}
      <div className={`max-w-3xl mx-auto relative z-10 px-6 ${postData.image ? 'md:-mt-32 pt-32' : 'pt-32'}`}>
        <Link href="/#blog" className="inline-flex items-center text-gray-300 hover:text-white mb-8 transition-colors backdrop-blur-md bg-black/30 px-4 py-2 rounded-full border border-white/10">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>

        {/* 헤더 */}
        <div className="mb-12">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-blue-500/20 text-blue-300 border border-blue-500/30`}>
            {postData.category}
          </div>
          <h1 className="text-3xl md:text-5xl font-bold mb-6 leading-tight text-white">{postData.title}</h1>
          <div className="flex flex-col md:flex-row md:items-center gap-4 md:gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2"><Calendar size={16} /> {postData.date}</div>
            <div className="flex items-center gap-2"><Clock size={16} /> {postData.readTime}</div>
          </div>
        </div>

        {/* 본문 */}
        <div
          className="prose prose-invert prose-sm md:prose-lg max-w-none prose-headings:text-blue-100 prose-a:text-blue-400 hover:prose-a:text-blue-300 prose-img:rounded-xl"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
      </div>
    </article>
  );
}
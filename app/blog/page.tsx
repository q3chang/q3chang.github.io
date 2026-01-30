import { getPostData, getSortedPostsData } from '@/lib/posts';
import Link from 'next/link';
import { ArrowLeft, Clock, Calendar } from 'lucide-react';

// 정적 경로 생성 (빌드할 때 미리 페이지 만들어두기)
export async function generateStaticParams() {
  const posts = getSortedPostsData();
  return posts.map((post) => ({
    id: post.id,
  }));
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  // 🔥 URL에 맞는 마크다운 파일 내용 가져오기
  const postData = await getPostData(params.id);

  return (
    <article className="min-h-screen bg-black text-white selection:bg-blue-500/30 pt-32 pb-20 px-6">
      
      {/* 배경 */}
      <div className="fixed inset-0 z-0 pointer-events-none">
         <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] opacity-40" />
      </div>

      <div className="max-w-3xl mx-auto relative z-10">
        <Link href="/#blog" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
          <ArrowLeft size={20} className="mr-2" /> Back to Blog
        </Link>

        {/* 헤더 */}
        <div className="mb-12">
          <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mb-4 bg-gradient-to-r ${postData.gradient} bg-opacity-10 border border-white/10`}>
            {postData.category}
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{postData.title}</h1>
          <div className="flex items-center gap-6 text-gray-400 text-sm">
            <div className="flex items-center gap-2"><Calendar size={16} /> {postData.date}</div>
            <div className="flex items-center gap-2"><Clock size={16} /> {postData.readTime}</div>
          </div>
        </div>

        {/* 🔥 본문 (HTML로 변환된 마크다운) */}
        <div 
          className="prose prose-invert prose-lg max-w-none prose-headings:text-blue-100 prose-a:text-blue-400 hover:prose-a:text-blue-300"
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }} 
        />
      </div>
    </article>
  );
}
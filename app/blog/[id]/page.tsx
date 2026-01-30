import postsData from '@/lib/posts.json'; // 블로그 데이터 가져오기

// 1. 정적 배포를 위한 함수 (이게 있어야 깃헙에 올라갑니다!)
// "행님, 블로그 글 ID가 1, 2, 3... 이렇게 있으니까 미리 페이지 만들어놓으이소" 하고 알려주는 겁니다.
export async function generateStaticParams() {
  return postsData.map((post) => ({
    id: post.id,
  }));
}

// 2. 페이지 컴포넌트 (async 필수!)
// params 타입도 Promise로 감싸줘야 합니다.
export default async function BlogPostPage({ 
  params 
}: { 
  params: Promise<{ id: string }> 
}) {
  // 여기서 기다렸다가(await) ID를 꺼냅니다!
  const { id } = await params;

  // 해당 ID에 맞는 글 찾기 (없으면 못 찾았다고 표시)
  const post = postsData.find((p) => p.id === id);

  if (!post) {
    return (
      <main className="min-h-screen pt-32 pb-20 px-6 bg-black text-white flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-6">404 - Post Not Found</h1>
        <p className="text-gray-400">해당하는 글을 찾을 수 없습니다 행님.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-black text-white flex flex-col items-center justify-center">
      <div className="max-w-3xl w-full text-center">
        <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium border border-white/10 mb-6 bg-gradient-to-r ${post.gradient} bg-clip-text text-transparent`}>
          {post.category}
        </div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">{post.title}</h1>
        
        <div className="flex items-center justify-center gap-4 text-gray-500 mb-12 text-sm">
          <span>{post.date}</span>
          <span>•</span>
          <span>{post.readTime}</span>
        </div>

        <div className="p-8 rounded-2xl bg-white/5 border border-white/10 text-left">
          <p className="text-gray-300 leading-relaxed text-lg">
            {post.excerpt}
            <br /><br />
            (여기에 나중에 마크다운 내용이 들어올 자리입니다. 지금은 요약본만 보여줍니다 행님!)
          </p>
        </div>
        
        <div className="mt-10">
          <a href="/blog" className="text-blue-400 hover:text-blue-300 transition-colors">
            ← Back to Blog
          </a>
        </div>
      </div>
    </main>
  );
}
import { getSortedPostsData } from '@/lib/posts';
import BlogSection from '@/components/BlogSection';

export default function BlogPage() {
  // 1. 일단 데이터를 가져옵니다.
  const allPostsData = getSortedPostsData();

  // 🔥 [핵심 디버깅] 데이터가 이상한 놈들을 여기서 원천 차단합니다.
  // id가 없거나, 정의되지 않은(undefined) 놈들은 가차없이 버립니다.
  const safePosts = allPostsData.filter((post) => {
    return post && post.id && post.id !== 'undefined';
  });

  // 만약 안전한 포스트가 하나도 없다면? 에러 방지용 빈 배열 처리
  if (!safePosts || safePosts.length === 0) {
    return (
      <main className="min-h-screen bg-black pt-40 text-center text-white">
        <h1 className="text-2xl font-bold">아직 작성된 글이 없습니다 행님!</h1>
        <p className="text-gray-400 mt-4">posts 폴더에 .md 파일을 넣어주이소.</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black pt-20">
      <div className="max-w-7xl mx-auto px-6 py-20">
        {/* 🔥 검증된 'safePosts'만 넘깁니다! */}
        <BlogSection posts={safePosts} />
      </div>
    </main>
  );
}
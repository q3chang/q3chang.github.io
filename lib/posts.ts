import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

// 1. 모든 글 목록 가져오기 (메인/블로그 목록용)
export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  
  const allPostsData = fileNames
    // 🔥 [첫 번째 방어] .md로 끝나는 진짜 마크다운 파일만 골라냅니다!
    .filter(fileName => fileName.endsWith('.md')) 
    .map((fileName) => {
      const id = fileName.replace(/\.md$/, '');
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, 'utf8');
      const matterResult = matter(fileContents);

      return {
        id,
        ...(matterResult.data as { 
          date: string; 
          title: string; 
          category: string; 
          readTime: string; 
          gradient: string; 
          excerpt: string;
          image?: string;
        }),
      };
    })
    // 🔥 [두 번째 방어] 데이터가 깨졌거나 id가 없는 놈은 가차없이 버립니다!
    .filter(post => post && post.id && post.id !== 'undefined');

  // ID(파일명) 내림차순 정렬
  const sortedPosts = allPostsData.sort((a, b) => (a.id < b.id ? 1 : -1));

  // 최신 5개만 자르기
  return sortedPosts.slice(0, 5);
}

// 2. 특정 글 내용 가져오기 (상세 페이지용)
export async function getPostData(id: string) {
  // 🔥 [세 번째 방어] id가 이상하면 바로 에러 던져서 undefined 접근 차단!
  if (!id || id === 'undefined') {
    throw new Error('Invalid post ID 행님!');
  }

  const fullPath = path.join(postsDirectory, `${id}.md`);
  
  // 파일이 실제로 있는지 확인
  if (!fs.existsSync(fullPath)) {
    throw new Error(`File not found: ${id}.md 행님!`);
  }

  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    ...(matterResult.data as { 
        date: string; 
        title: string; 
        category: string; 
        readTime: string; 
        gradient: string; 
        excerpt: string;
        image?: string;
    }),
  };
}
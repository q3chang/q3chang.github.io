import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'posts');

export function getSortedPostsData() {
  if (!fs.existsSync(postsDirectory)) {
    return [];
  }

  const fileNames = fs.readdirSync(postsDirectory);
  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf8');
    const matterResult = matter(fileContents);

    return {
      id,
      // 🔥 [핵심 수정] 여기에 image 필드를 추가했습니다!
      ...(matterResult.data as { 
        date: string; 
        title: string; 
        category: string; 
        readTime: string; 
        gradient: string; 
        excerpt: string;
        image?: string; // 이미지는 있을 수도 있고 없을 수도 있음 (선택)
      }),
    };
  });

  // ID(파일명) 내림차순 정렬 (최신순)
  const sortedPosts = allPostsData.sort((a, b) => {
    if (a.id < b.id) return 1;
    else return -1;
  });

  // 최신 5개만 자르기
  return sortedPosts.slice(0, 5);
}

export async function getPostData(id: string) {
  const fullPath = path.join(postsDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    // 🔥 여기도 image 추가!
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
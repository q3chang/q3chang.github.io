'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { Clock, ArrowRight } from 'lucide-react';
import { useRef } from 'react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  gradient: string;
  image?: string;
}

export default function BlogSection({ posts }: { posts: BlogPost[] }) {
  const scrollRef = useRef<HTMLDivElement>(null);

  return (
    <section id="blog" className="min-h-screen flex flex-col items-center py-20 relative z-10 overflow-hidden">
      <div className="w-full max-w-7xl px-6">
        <motion.h2 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 1 }}
           viewport={{ once: true }}
           className="text-5xl font-bold mb-4 text-center"
        >
          Blog
        </motion.h2>
        
        <p className="text-gray-500 text-center mb-12 text-sm">
          Scroll horizontally to see more →
        </p>

        <div 
          ref={scrollRef}
          className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory scroll-smooth no-scrollbar"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {posts.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="flex-shrink-0 w-[300px] md:w-[380px] snap-center"
            >
              <Link href={`/blog/${post.id}`} className="group block h-full">
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                  
                  {/* 🔥 [핵심 수정] md(PC) 이상에서만 사진 영역을 보여주고 렌더링합니다! */}
                  {/* 모바일에서는 이 div 전체가 사라져서 텍스트 카드만 남습니다. */}
                  {post.image && (
                    <div className="hidden md:block h-48 w-full relative overflow-hidden">
                      <Image 
                        src={post.image} 
                        alt={post.title} 
                        fill 
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                      
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/10 z-10">
                        {post.category}
                      </div>
                    </div>
                  )}

                  {/* 사진이 없는 포스트이거나 모바일일 때 보여줄 대체 그라데이션 (선택사항) */}
                  {/* 만약 모바일에서 아예 깔끔하게 텍스트만 보여주고 싶으면 이 block은 안 만지셔도 됩니다. */}
                  {!post.image && (
                    <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/10 z-10">
                        {post.category}
                      </div>
                    </div>
                  )}

                  <div className="p-6 flex flex-col flex-grow">
                    {/* 모바일에서 사진을 뺐으니 카테고리를 텍스트 위에 한 번 더 표시해주는 센스! */}
                    <div className="md:hidden mb-2">
                       <span className="px-2 py-0.5 bg-blue-500/20 text-blue-300 text-[10px] rounded-md border border-blue-500/30">
                         {post.category}
                       </span>
                    </div>

                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={12} /><span>{post.readTime}</span>
                      </div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">
                      Read Article <ArrowRight size={16} className="ml-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
          <div className="w-6 flex-shrink-0" />
        </div>
      </div>
    </section>
  );
}
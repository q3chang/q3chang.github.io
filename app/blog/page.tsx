'use client';

import { motion } from 'framer-motion';
import postsData from '@/lib/posts.json';
import Link from 'next/link';
import { Clock, ArrowRight } from 'lucide-react';

export default function BlogPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-black">
      <div className="max-w-6xl mx-auto">
        
        {/* 헤더 */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold text-white mb-6">Thoughts & Archive</h1>
          <p className="text-gray-400 text-lg">
            Personal notes on AI research, technology, and daily life.
          </p>
        </div>

        {/* 블로그 그리드 (3열 배치) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {postsData.map((post, index) => (
            <motion.div
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <Link href={`/blog/${post.id}`} className="group block h-full">
                <div className="h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                  
                  {/* 썸네일 (그라데이션) */}
                  <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                    <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/10">
                      {post.category}
                    </div>
                  </div>

                  {/* 내용 */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                      <span>{post.date}</span>
                      <span>•</span>
                      <div className="flex items-center gap-1">
                        <Clock size={12} />
                        <span>{post.readTime}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
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
        </div>

      </div>
    </main>
  );
}
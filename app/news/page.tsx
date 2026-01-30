'use client';

import { motion } from 'framer-motion';
import newsData from '@/lib/news.json';
import { Calendar, Tag } from 'lucide-react';

export default function NewsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-black">
      <div className="max-w-3xl mx-auto">
        
        {/* 헤더 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16 text-center"
        >
          <h1 className="text-5xl font-bold text-white mb-6">Latest News</h1>
          <p className="text-gray-400">Updates on research, publications, and life.</p>
        </motion.div>

        {/* 타임라인 컨테이너 */}
        <div className="relative border-l border-white/10 ml-4 md:ml-10 pl-8 md:pl-12 space-y-12">
          
          {newsData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="relative"
            >
              {/* 타임라인 점 (빛나는 구슬) */}
              <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full bg-black border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />

              {/* 날짜 & 카테고리 */}
              <div className="flex items-center gap-4 text-sm mb-2 text-gray-500">
                <div className="flex items-center gap-1 text-blue-300 font-mono">
                  <Calendar size={14} />
                  {item.date}
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs">
                  <Tag size={12} />
                  {item.category}
                </div>
              </div>

              {/* 내용 카드 (유리 질감) */}
              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            </motion.div>
          ))}

        </div>
      </div>
    </main>
  );
}
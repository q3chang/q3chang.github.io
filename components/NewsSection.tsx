'use client';

import { motion } from 'framer-motion';
import { Calendar, Tag } from 'lucide-react';
import newsData from '@/lib/news.json';

export default function NewsSection() {
  // 🔥 [핵심 수정] ID 숫자가 큰 순서대로 정렬하고 -> 상위 5개만 자름!
  const sortedNews = [...newsData]
    .sort((a, b) => Number(b.id) - Number(a.id)) // 3, 2, 1 순서
    .slice(0, 5); // 5개만 컷!

  return (
    <section id="news" className="min-h-screen flex items-center justify-center py-20 px-6 relative z-10">
      <div className="max-w-3xl w-full">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Latest News
        </motion.h2>

        <div className="relative border-l border-white/10 ml-4 md:ml-10 pl-8 md:pl-12 space-y-12">
          {/* sortedNews를 씁니다 (전체 newsData 아님!) */}
          {sortedNews.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <span className="absolute -left-[41px] md:-left-[57px] top-1 h-5 w-5 rounded-full bg-black border-2 border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
              
              <div className="flex items-center gap-4 text-sm mb-2 text-gray-500">
                <div className="flex items-center gap-1 text-blue-300 font-mono">
                  <Calendar size={14} />{item.date}
                </div>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs">
                  <Tag size={12} />{item.category}
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-colors">
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
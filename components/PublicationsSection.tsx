'use client';

import { motion } from 'framer-motion';
import { Calendar, BookOpen, FileText, Tag } from 'lucide-react'; // Github 아이콘 삭제했습니다!
import publicationsData from '@/lib/publications.json';
import Link from 'next/link';

export default function PublicationsSection() {
  const sortedPublications = [...publicationsData].sort((a, b) => Number(b.id) - Number(a.id));

  return (
    <section id="publications" className="min-h-screen flex flex-col items-center py-20 px-6 relative z-10">
      <div className="max-w-4xl w-full">
        <motion.h2 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-16 text-center"
        >
          Selected Publications
        </motion.h2>

        <div className="space-y-8">
          {sortedPublications.map((pub, index) => (
            <motion.div
              key={pub.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/30 transition-all duration-300 hover:bg-white/10"
            >
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 mb-4">
                <div className="flex flex-wrap gap-3">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold border ${
                    pub.venue.includes('AAAI') || pub.venue.includes('NeurIPS') || pub.venue.includes('CVPR')
                      ? 'bg-blue-500/20 text-blue-300 border-blue-500/30' 
                      : 'bg-gray-700/50 text-gray-300 border-gray-600'
                  }`}>
                    <BookOpen size={12} className="inline mr-1" />
                    {pub.venue}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-400 bg-black/20 border border-white/5 flex items-center">
                    <Calendar size={12} className="mr-1" />
                    {pub.year}
                  </span>
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-3 leading-tight group-hover:text-blue-400 transition-colors">
                {pub.title}
              </h3>
              
              <p className="text-gray-400 mb-6 text-sm leading-relaxed">
                {pub.authors.split(', ').map((author, i) => (
                  <span key={i} className={author.includes('Gyusam Chang') ? "text-white font-bold underline decoration-blue-500 decoration-2 underline-offset-4" : ""}>
                    {author}{i < pub.authors.split(', ').length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>

              <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 pt-6 border-t border-white/5">
                
                {/* 태그들 */}
                <div className="flex flex-wrap gap-2">
                  {pub.tags && pub.tags.map((tag, i) => (
                    <span key={i} className="px-2.5 py-1 rounded-md text-xs font-medium bg-blue-500/10 text-blue-200 border border-blue-500/20 flex items-center">
                      <Tag size={10} className="mr-1.5 opacity-70" />
                      {tag}
                    </span>
                  ))}
                </div>

                {/* 🔥 [수정 완료] Code 버튼 삭제하고 PDF만 남겼습니다! */}
                <div className="flex gap-3">
                  {pub.links?.pdf && (
                    <Link href={pub.links.pdf} target="_blank" className="flex items-center px-4 py-2 rounded-lg bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-sm font-medium transition-all group/btn">
                      <FileText size={16} className="mr-2 text-red-400 group-hover/btn:text-red-300" />
                      PDF
                    </Link>
                  )}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
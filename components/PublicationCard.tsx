'use client';

import { motion } from 'framer-motion';
import { FileText, Github, Calendar } from 'lucide-react';

interface PublicationProps {
  data: {
    title: string;
    authors: string;
    venue: string;
    year: string;
    tags: string[];
    links: {
      pdf?: string;
      code?: string;
    };
  };
  index: number;
}

export default function PublicationCard({ data, index }: PublicationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
      className="group relative p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:bg-white/10 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-purple-500/10"
    >
      {/* 연도 뱃지 */}
      <div className="flex items-center gap-2 text-xs font-mono text-purple-300 mb-3">
        <Calendar size={14} />
        <span>{data.year}</span>
        <span className="w-1 h-1 bg-white/20 rounded-full" />
        <span className="text-blue-300 font-bold">{data.venue}</span>
      </div>

      {/* 논문 제목 */}
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-500 transition-all">
        {data.title}
      </h3>

      {/* 저자 */}
      <p className="text-gray-400 text-sm mb-4">
        {data.authors.split(',').map((author, i) => (
          <span key={i} className={author.includes('Gyusam Chang') ? 'text-white font-semibold underline decoration-blue-500/50' : ''}>
            {author.trim()}{i < data.authors.split(',').length - 1 ? ', ' : ''}
          </span>
        ))}
      </p>

      {/* 태그 및 링크 */}
      <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
        <div className="flex gap-2">
          {data.tags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs rounded-md bg-white/5 text-gray-300 border border-white/5">
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex gap-3">
          {data.links.pdf && (
            <a href={data.links.pdf} className="text-gray-400 hover:text-white transition-colors" title="PDF">
              <FileText size={18} />
            </a>
          )}
          {data.links.code && (
            <a href={data.links.code} className="text-gray-400 hover:text-white transition-colors" title="Code">
              <Github size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
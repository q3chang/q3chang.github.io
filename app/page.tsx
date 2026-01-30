'use client';

import { motion } from 'framer-motion';

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-6 relative overflow-hidden bg-black text-white">
      
      {/* 배경 오로라 효과 */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/30 rounded-full blur-[120px]" />
      <div className="absolute bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px]" />

      {/* 메인 콘텐츠 */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="z-10 text-center max-w-3xl"
      >
        {/* 작은 뱃지 */}
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl text-sm text-blue-300 font-mono">
          AI PhD Student @ Korea Univ.
        </div>

        {/* 이름 (여기가 핵심입니다 행님!) */}
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Hello, I'm <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500">
            Gyusam Chang
          </span>
        </h1>

        {/* 소개글 */}
        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          Exploring the frontiers of <span className="text-white font-semibold">Neural Architecture Search</span> and <span className="text-white font-semibold">Continual Learning</span>.
          Building the next generation of AI.
        </p>

        {/* 버튼들 */}
        <div className="flex gap-4 justify-center">
          <button className="px-8 py-3 rounded-xl font-semibold text-white bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/10 hover:scale-105">
            View Publications
          </button>
          <button className="px-8 py-3 rounded-xl font-semibold text-gray-400 hover:text-white transition-colors border border-transparent hover:border-white/10">
            Contact Me
          </button>
        </div>
      </motion.div>
    </main>
  );
}
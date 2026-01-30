'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20 px-6 bg-black text-white">
      <div className="max-w-4xl mx-auto">
        
        {/* 헤더 섹션 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-16"
        >
          <h1 className="text-5xl font-bold mb-6">About Me</h1>
          <div className="h-1 w-20 bg-blue-500 rounded-full mb-8" />
          <p className="text-xl text-gray-300 leading-relaxed">
            안녕하세요, <span className="text-blue-400 font-semibold">고려대학교 박사과정 장규삼</span>입니다.<br/>
            AI의 미래를 설계하는 Neural Architecture Search와 끊임없이 학습하는 Continual Learning을 연구하고 있습니다.
          </p>
        </motion.div>

        {/* 본문 섹션 (유리 카드 디자인) */}
        <div className="grid gap-8 md:grid-cols-2">
          
          {/* 왼쪽: 연구 관심사 */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-purple-300">Research Interests</h2>
            <ul className="space-y-3 text-gray-400 list-disc list-inside">
              <li>Neural Architecture Search (NAS)</li>
              <li>Continual Learning & Catastrophic Forgetting</li>
              <li>Computer Vision & Pattern Recognition</li>
              <li>Efficient AI Models for Edge Devices</li>
            </ul>
          </motion.div>

          {/* 오른쪽: 학력 및 경력 */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm"
          >
            <h2 className="text-2xl font-bold mb-4 text-blue-300">Education</h2>
            <ul className="space-y-4">
              <li>
                <div className="text-white font-semibold">Ph.D. Student in AI</div>
                <div className="text-sm text-gray-500">Korea University (202X - Present)</div>
              </li>
              <li>
                <div className="text-white font-semibold">B.S. in Computer Science</div>
                <div className="text-sm text-gray-500">Korea University</div>
              </li>
            </ul>
          </motion.div>
        </div>

        {/* 하단: 비전/철학 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-8 p-8 rounded-2xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-white/10"
        >
          <h2 className="text-2xl font-bold mb-4">Vision</h2>
          <p className="text-gray-400 leading-relaxed">
            저는 단순히 성능 좋은 모델을 만드는 것을 넘어, 변화하는 환경에 적응하고 스스로 진화하는 AI 시스템을 꿈꿉니다.
            (행님의 연구 철학을 여기에 멋지게 적어주시면 됩니다!)
          </p>
        </motion.div>

      </div>
    </main>
  );
}
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export default function AboutSection() {
  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 relative z-10">
      <div className="max-w-4xl w-full">
        {/* 제목 */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl font-bold mb-12 text-center"
        >
          About Me
        </motion.h2>

        {/* 프로필 사진 (가운데 유지) */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="mb-12 flex justify-center"
        >
          <div className="relative w-48 h-48 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl">
            <Image 
              src="/me.JPG" 
              alt="Profile" 
              fill 
              className="object-cover"
            />
          </div>
        </motion.div>

        {/* 🔥 [핵심 변경 1] 텍스트 왼쪽 정렬 (text-left) */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-lg text-gray-300 leading-relaxed text-left" // 여기가 왼쪽 정렬입니다!
        >
          <p>
            Gyusam Chang is a Ph.D. candidate at <span style={{color: '#8B0000', fontWeight: 'bold'}}>Korea University</span>. 
            He previously interned at <span className="text-blue-400 font-bold">Samsung Advanced Institute of Technology (SAIT)</span>, where he worked with Principal Researcher Sujin Jang. 
            He also completed a Visiting Graduate Researcher program at the <span className="text-blue-400 font-bold">University of California, Los Angeles (UCLA)</span>, working with Prof. M. Khalid Jawed. 
            His research focuses on designing efficient, generalizable and transferable frameworks that seamlessly adapt to complex real-world environments.
          </p>
        </motion.div>

        {/* 🔥 [핵심 변경 2] Research Interests를 Vision 스타일(넓은 박스)로 승진! */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          // 아래 스타일이 Vision에서 쓰던 그 스타일입니다!
          className="w-full p-8 rounded-3xl bg-gradient-to-r from-blue-900/20 to-purple-900/20 border border-blue-500/20 backdrop-blur-sm"
        >
          <h3 className="text-2xl font-bold mb-6 text-blue-300">Research Interests</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-300 text-lg">
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]" />
              Domain Generalization/Adaptation
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.8)]" />
              Continual Learning
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.8)]" />
              Parameter-Efficient Fine-Tuning
            </li>
            <li className="flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.8)]" />
              Multi-modal Representation Learning
            </li>
          </ul>
        </motion.div>

        {/* Education이랑 Vision은 시원하게 삭제했습니다! */}

      </div>
    </section>
  );
}
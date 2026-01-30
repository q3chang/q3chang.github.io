'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Linkedin, Mail, FileText, GraduationCap } from 'lucide-react';

export default function HeroSection() {
  const links = {
    linkedin: "https://www.linkedin.com/in/규삼행님아이디/",
    scholar: "https://scholar.google.com/citations?user=규삼행님아이디",
    email: "mailto:gyusam@korea.ac.kr",
    cv: "/cv.pdf"
  };
  const iconStyle = "p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/20";

  return (
    <section id="home" className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center max-w-3xl"
      >
        <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl text-sm text-blue-300 font-mono">
          Ph.D. Student @ Korea Univ.
        </div>
        <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
          Hello, I'm <br />
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500">
            Gyusam Chang
          </span>
        </h1>
        <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
          Exploring the frontiers of <span className="text-white font-semibold">Neural Architecture Search</span> and <span className="text-white font-semibold">Continual Learning</span>.
          Building the next generation of AI.
        </p>
        <div className="flex gap-6 justify-center mt-8">
          <Link href={links.linkedin} target="_blank" className={iconStyle}><Linkedin size={24} /></Link>
          <Link href={links.scholar} target="_blank" className={iconStyle}><GraduationCap size={24} /></Link>
          <Link href={links.email} className={iconStyle}><Mail size={24} /></Link>
          <Link href={links.cv} target="_blank" className={iconStyle}><FileText size={24} /></Link>
        </div>
      </motion.div>
    </section>
  );
}
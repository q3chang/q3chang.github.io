'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { Linkedin, Mail, FileText, GraduationCap } from 'lucide-react';
import Image from 'next/image';

export default function HeroSection() {
  const links = {
    linkedin: "https://www.linkedin.com/in/gyusam-chang-735290231/",
    scholar: "https://scholar.google.com/citations?user=7w4GZ8cAAAAJ&hl=ko&oi=ao",
    email: "mailto:gyusam@korea.ac.kr",
    cv: "/cv.pdf"
  };
  const iconStyle = "p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/20";

  return (
    <section id="home" className="min-h-screen py-24 px-6 relative z-10">
      <div className="max-w-4xl mx-auto">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="text-center mb-16"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/10 border border-white/10 shadow-xl text-sm text-blue-300 font-mono">
            Ph.D. Student @ Korea Univ.
          </div>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 tracking-tight">
            Hello, I&apos;m <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-500 to-indigo-500">
              Gyusam Chang
            </span>
          </h1>
          <p className="text-xl text-gray-400 mb-10 leading-relaxed max-w-2xl mx-auto">
            Bridging deep theoretical insights with practical applications through efficient and transferable strategies for the next generation of AI.
          </p>
          <div className="flex gap-6 justify-center mt-8">
            <Link href={links.linkedin} target="_blank" className={iconStyle}><Linkedin size={24} /></Link>
            <Link href={links.scholar} target="_blank" className={iconStyle}><GraduationCap size={24} /></Link>
            <Link href={links.email} className={iconStyle}><Mail size={24} /></Link>
            <Link href={links.cv} target="_blank" className={iconStyle}><FileText size={24} /></Link>
          </div>
        </motion.div>

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

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-lg text-gray-300 leading-relaxed text-left"
        >
          <p>
            Gyusam Chang is a Ph.D. candidate at <span style={{color: '#8B0000', fontWeight: 'bold'}}>Korea University</span>. 
            He previously interned at <span className="text-blue-400 font-bold">Samsung Advanced Institute of Technology (SAIT)</span>, where he worked with Principal Researcher Sujin Jang. 
            He also completed a Visiting Graduate Researcher program at the <span className="text-blue-400 font-bold">University of California, Los Angeles (UCLA)</span>, working with Prof. M. Khalid Jawed. 
            His research focuses on designing efficient, generalizable and transferable frameworks that seamlessly adapt to complex real-world environments.
          </p>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
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
      </div>
    </section>
  );
}

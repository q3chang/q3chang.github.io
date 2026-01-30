'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
// 🔥 [추가된 부분] 이미지를 쓰려면 이걸 가져와야 합니다!
import Image from 'next/image';
import { Linkedin, Mail, FileText, GraduationCap, Calendar, Tag, Clock, ArrowRight } from 'lucide-react';

import publicationsData from '@/lib/publications.json';
import newsData from '@/lib/news.json';
import postsData from '@/lib/posts.json';
import PublicationCard from '@/components/PublicationCard';

export default function Home() {
  // 행님! 아까 링크 주소들 잘 넣어두셨지예? 혹시 지워졌으면 다시 넣어주이소!
  const links = {
    linkedin: "https://www.linkedin.com/in/규삼행님아이디/",
    scholar: "https://scholar.google.com/citations?user=규삼행님아이디",
    email: "mailto:gyusam@korea.ac.kr",
    cv: "/cv.pdf"
  };

  const iconStyle = "p-3 rounded-full bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-blue-500/20";

  return (
    <main className="bg-black text-white selection:bg-blue-500/30 relative">
      
      {/* 배경 조명 (고정) */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] opacity-50" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] opacity-50" />
      </div>

      {/* 1. HOME 섹션 */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center p-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-3xl"
        >
          <div className="inline-block px-4 py-1.5 mb-6 rounded-full bg-white/5 backdrop-blur-lg border border-white/10 shadow-xl text-sm text-blue-300 font-mono">
            AI PhD Student @ Korea Univ.
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

      {/* 2. ABOUT ME 섹션 (사진 추가됨!) */}
      <section id="about" className="min-h-screen flex items-center justify-center py-20 px-6 relative z-10">
        <div className="max-w-4xl w-full">
          <motion.div 
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-5xl font-bold mb-12 text-center">About Me</h2>
            
            {/* 🔥 [여기!] 행님 사진 들어갈 자리입니다 🔥 */}
            <div className="flex justify-center mb-10">
              <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-white/10 shadow-[0_0_30px_rgba(59,130,246,0.3)] group">
                {/* 행님! 여기서 src="/me.jpg" 부분이 파일 이름입니다.
                   만약 파일 이름이 다르면 여기를 바꿔주셔야 합니다! (예: /profile.png)
                */}
                <Image 
                  src="/me.JPG" 
                  alt="Gyusam Chang" 
                  fill 
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* 자기소개 멘트 */}
            <div className="mb-16 text-center max-w-2xl mx-auto">
              <p className="text-xl text-gray-300 leading-relaxed">
                안녕하세요, <span className="text-blue-400 font-bold">고려대학교 박사과정 장규삼</span>입니다.<br/>
                AI의 미래를 설계하는 Neural Architecture Search와 끊임없이 학습하는 Continual Learning을 연구하고 있습니다.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-purple-300">Research Interests</h3>
                <ul className="space-y-3 text-gray-400 list-disc list-inside">
                  <li>Neural Architecture Search (NAS)</li>
                  <li>Continual Learning</li>
                  <li>Computer Vision</li>
                  <li>Efficient AI Models</li>
                </ul>
              </div>
              <div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm hover:border-blue-500/30 transition-colors">
                <h3 className="text-2xl font-bold mb-4 text-blue-300">Education</h3>
                <ul className="space-y-4">
                  <li>
                    <div className="text-white font-semibold">Ph.D. Student in AI</div>
                    <div className="text-sm text-gray-500">Korea University (Present)</div>
                  </li>
                  <li>
                    <div className="text-white font-semibold">B.S. in Computer Science</div>
                    <div className="text-sm text-gray-500">Korea University</div>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. NEWS 섹션 (이하 동일) */}
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
            {newsData.map((item, index) => (
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
                  <div className="flex items-center gap-1 text-blue-300 font-mono"><Calendar size={14} />{item.date}</div>
                  <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-xs"><Tag size={12} />{item.category}</div>
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

      {/* 4. PUBLICATIONS 섹션 */}
      <section id="publications" className="min-h-screen flex flex-col items-center py-20 px-6 relative z-10">
        <div className="max-w-4xl w-full">
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-5xl font-bold mb-16 text-center"
          >
            Publications
          </motion.h2>
          <div className="grid gap-6">
            {publicationsData.map((pub, index) => (
              <motion.div
                key={pub.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <PublicationCard data={pub} index={index} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. BLOG 섹션 */}
      <section id="blog" className="min-h-screen flex flex-col items-center py-20 px-6 relative z-10">
        <div className="max-w-6xl w-full">
          <motion.h2 
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             viewport={{ once: true }}
             className="text-5xl font-bold mb-16 text-center"
          >
            Blog
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {postsData.map((post, index) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.id}`} className="group block h-full">
                  <div className="h-full rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 flex flex-col">
                    <div className={`h-48 w-full bg-gradient-to-br ${post.gradient} relative overflow-hidden`}>
                      <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300" />
                      <div className="absolute top-4 left-4 px-3 py-1 bg-black/50 backdrop-blur-md rounded-full text-xs text-white font-medium border border-white/10">{post.category}</div>
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-2 text-xs text-gray-500 mb-4">
                        <span>{post.date}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1"><Clock size={12} /><span>{post.readTime}</span></div>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">{post.title}</h3>
                      <p className="text-gray-400 text-sm line-clamp-3 mb-6 flex-grow">{post.excerpt}</p>
                      <div className="flex items-center text-blue-400 text-sm font-medium group-hover:translate-x-2 transition-transform duration-300">Read Article <ArrowRight size={16} className="ml-1" /></div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
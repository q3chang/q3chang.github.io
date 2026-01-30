'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Home } from 'lucide-react';

// 주소를 '/' 대신 '#아이디'로 바꿨습니다!
const navItems = [
  { name: 'About me', path: '#about' },
  { name: 'News', path: '#news' },
  { name: 'Publications', path: '#publications' },
  { name: 'Blog', path: '#blog' },
];

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
      <div className="flex items-center gap-1 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
        
        {/* 홈 버튼 (맨 위로) */}
        <Link 
          href="#home" 
          className="px-4 py-2 rounded-full text-gray-400 hover:text-white hover:bg-white/10 transition-colors duration-300"
        >
          <Home size={18} />
        </Link>

        {/* 메뉴 버튼들 */}
        {navItems.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className="relative px-6 py-2 rounded-full text-sm font-medium text-gray-400 hover:text-white transition-colors duration-300"
          >
            <span className="relative z-10">{item.name}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
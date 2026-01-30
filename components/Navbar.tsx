'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';
import { Home } from 'lucide-react';
import { useState, useEffect } from 'react';

const navItems = [
  { name: 'About me', path: '/#about', id: 'about' },
  { name: 'News', path: '/#news', id: 'news' },
  { name: 'Publications', path: '/#publications', id: 'publications' },
  { name: 'Blog', path: '/#blog', id: 'blog' },
];

export default function Navbar() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    if (pathname !== '/') {
      setActiveSection('');
      return;
    }

    const sections = document.querySelectorAll('section');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, [pathname]);

  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    if (pathname === '/') {
      e.preventDefault();
      const element = document.getElementById(targetId);
      if (element) {
        const headerOffset = 80; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: "smooth" });
      }
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-4 md:py-6 px-2">
      {/* 🔥 [핵심 수정] gap-0.5로 줄이고, 패딩도 모바일에 맞췄습니다! */}
      <div className="flex items-center gap-0.5 md:gap-1 p-1.5 rounded-full bg-black/90 md:bg-white/5 md:backdrop-blur-md border border-white/10 shadow-2xl overflow-x-auto no-scrollbar max-w-full">
        
        {/* 홈 버튼 */}
        <Link 
          href="/" 
          onClick={(e) => {
            if (pathname === '/') {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }
          }}
          className={clsx(
            'p-2 md:px-4 md:py-2 rounded-full transition-colors duration-300',
            (activeSection === 'home' && pathname === '/') ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'
          )}
        >
          <Home size={16} className="md:w-[18px]" />
        </Link>

        {navItems.map((item) => {
          const isActive = pathname === '/' && activeSection === item.id;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={(e) => handleScroll(e, item.id)}
              className={clsx(
                'relative px-2 md:px-6 py-2 rounded-full font-medium transition-colors duration-300 whitespace-nowrap',
                // 🔥 모바일에서는 글자 크기를 확 줄였습니다 (text-[11px])
                'text-[11px] md:text-sm',
                isActive ? 'text-white' : 'text-gray-400 hover:text-white'
              )}
            >
              {isActive && (
                <motion.div
                  layoutId="active-pill"
                  className="absolute inset-0 bg-white/10 rounded-full"
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{item.name}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
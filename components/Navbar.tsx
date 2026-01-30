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

  // 1. 스크롤 감시자 (CCTV) - 스크롤 위치에 따라 불 켜주는 기능
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

  // 🔥 [핵심 기술] 강제 스크롤 이동 함수 (Manual Steering)
  const handleScroll = (e: React.MouseEvent, targetId: string) => {
    // 만약 우리가 지금 '메인 페이지(/)'에 있다면?
    if (pathname === '/') {
      e.preventDefault(); // "잠깐! 브라우저야, 네 맘대로 주소 바꾸지 마!" (기본 동작 막기)
      
      const element = document.getElementById(targetId);
      if (element) {
        // 네비게이션 바 높이(약 100px)만큼 빼고 위치 계산
        const headerOffset = 100; 
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
    
        // 부드럽게 강제 이동!
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth"
        });
      }
    }
    // 만약 다른 페이지(블로그 상세 등)에 있다면? -> 그냥 Link 태그가 알아서 이동하게 둠 (기본 동작 유지)
  };

  // 홈 버튼 클릭 시 (맨 위로 가기)
  const handleHomeClick = (e: React.MouseEvent) => {
    if (pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
      <div className="flex items-center gap-1 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
        
        {/* 홈 버튼 */}
        <Link 
          href="/" 
          onClick={handleHomeClick} // 홈 버튼도 강제 이동 적용!
          className={clsx(
            'px-4 py-2 rounded-full transition-colors duration-300',
            (activeSection === 'home' && pathname === '/') ? 'text-white bg-white/10' : 'text-gray-400 hover:text-white'
          )}
        >
          <Home size={18} />
        </Link>

        {navItems.map((item) => {
          const isActive = pathname === '/' && activeSection === item.id;
          
          return (
            <Link
              key={item.path}
              href={item.path}
              onClick={(e) => handleScroll(e, item.id)} // 🔥 여기서 강제 이동 함수 실행!
              className={clsx(
                'relative px-6 py-2 rounded-full text-sm font-medium transition-colors duration-300',
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
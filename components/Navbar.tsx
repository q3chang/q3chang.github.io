'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion } from 'framer-motion';
import { clsx } from 'clsx';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Publications', path: '/publications' },
  { name: 'News', path: '/news' },
  { name: 'Blog', path: '/blog' },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center py-6">
      <div className="flex items-center gap-1 p-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 shadow-2xl">
        {navItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.path}
              href={item.path}
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
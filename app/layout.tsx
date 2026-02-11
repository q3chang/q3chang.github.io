import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar'; // 방금 만든 그놈 불러옵니다

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Gyusam Chang | AI Researcher',
  description: 'PhD Student in AI at Korea University',
  icons: {
    icon: '/favicon.png', 
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* 네비게이션 바를 맨 위에 고정! */}
        <Navbar /> 
        {children}
      </body>
    </html>
  );
}
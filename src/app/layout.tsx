"use client";

import { useEffect, useState } from "react";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import "./globals.css";

// Google Fonts (Geist Sans & Geist Mono)
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Nav items
const navItems = [
  { label: "About", href: "/about" },
  { label: "Research", href: "/research" },
  { label: "CV", href: "/cv" },
];

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const [hydrated, setHydrated] = useState(false);
  const pathname = usePathname();

  // 클라이언트에서 실행되었음을 확인 (서버-클라이언트 불일치 방지)
  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) return null; // Hydration 오류 방지 (서버와 HTML 불일치 방지)

  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          font-gotham 
          antialiased 
          min-h-screen 
          flex 
          flex-col 
          bg-white
        `}
      >
        {/* 메인 헤더 */}
        <motion.header
          initial={{ y: -30, opacity: 0 }}  // 위에서 내려오는 애니메이션
          animate={{ y: 0, opacity: 1 }}    
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="w-full px-8 py-4 flex items-center border-b border-gray-100"
        >
          {/* 왼쪽: SOL LEE */}
          <Link href="/" className="flex-1 font-bold text-xl">
            SOL LEE
          </Link>

          {/* 가운데: 이메일 (중앙 정렬) */}
          <div className="flex-1 text-center text-sm text-gray-700">
            ds1464@naver.com
          </div>

          {/* 오른쪽: 메뉴 (About, Research, CV) */}
          <nav className="flex-1 flex justify-end gap-6">
            {navItems.map(({ label, href }) => {
              const isActive = hydrated && pathname === href;
              return (
                <Link
                  key={href}
                  href={href}
                  className={`
                    ${isActive ? "text-blue-600 font-bold" : "hover:text-blue-600"} 
                    transition-colors duration-300
                  `}
                >
                  {label}
                </Link>
              );
            })}
          </nav>
        </motion.header>

        {/* 메인 콘텐츠 */}
        <main className="flex-1 w-full mx-auto mt-4 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}

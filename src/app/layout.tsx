"use client";

import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ReactNode } from "react";
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

export default function RootLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();

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
        {/* 헤더를 화면 맨 위에서 살짝 떨어뜨리고 가운데 정렬 */}
        <motion.header
          initial={{ y: -30, opacity: 0 }}  // 위에서 살짝 내려오는 시작 상태
          animate={{ y: 0, opacity: 1 }}    // 최종 상태
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-4 flex justify-center" // 상단 간격 + 수평 중앙 배치
        >
          {/* 헤더 자체를 '카드'처럼 만들기 */}
          <div className="
            bg-[#F5F5F5]
            w-[480px]
            py-2
            px-3
            rounded-[3px] 
            shadow-lg
            flex 
            items-center 
            justify-between
          ">
            {/* 왼쪽 로고 */}
            <Link href="/" className="text-lg font-black tracking-wide">
              SOL LEE
            </Link>

            {/* 오른쪽 메뉴 */}
            <div className="flex gap-6 h-full items-center text-base">
              {navItems.map(({ label, href }) => {
                const isActive = pathname === href;
                return (
                  <Link
                    key={href}
                    href={href}
                    className={`
                      ${
                        isActive
                          ? "text-blue-600 font-bold"
                          : "hover:text-blue-600"
                      } 
                      transition-colors 
                      duration-300
                      mt-2
                    `}
                  >
                    {label}
                  </Link>
                );
              })}
            </div>
          </div>
        </motion.header>

        {/* 메인 콘텐츠: 헤더 아래쪽으로 띄워서 표시 */}
        <main className="flex-1 w-full mx-auto mt-4 px-4">
          {children}
        </main>
      </body>
    </html>
  );
}

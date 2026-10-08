import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

import { SITE_URL } from "@/constants/seo";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "RyuisLabs (류이즈랩스) — 온디바이스 AI 비전 & 프라이버시 보존 상태 검증 엔진",
    template: "%s | RyuisLabs",
  },
  description:
    "RyuisLabs는 온디바이스 AI 비전과 제로 지식(Zero-Knowledge) 원칙을 결합하여, 개인의 몰입과 훈련 과정을 프라이버시 침해 없이 정밀하게 검증하고 데이터화하는 시스템 엔지니어링 스튜디오입니다.",
  applicationName: "RyuisLabs",
  authors: [{ name: "ryuis", url: "https://yoonjonglyu.github.io" }],
  creator: "ryuis",
  publisher: "RyuisLabs",
  keywords: [
    "RyuisLabs",
    "류이즈랩스",
    "RYUis : STATUS",
    "온디바이스 AI",
    "Zero-Knowledge",
    "프라이버시 보존",
    "몰입 검증",
    "SeedVault",
    "MemoFlow",
    "Gravity Time",
    "DaoXin",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    siteName: "RyuisLabs",
    title: "RyuisLabs — On-Device AI Vision & Privacy-Preserving State Verification",
    description:
      "Deterministic systems engineering studio developing on-device AI vision and zero-knowledge status verification engines.",
    url: SITE_URL,
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "RyuisLabs Logo & System Architecture",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "RyuisLabs — On-Device AI Vision & State Verification",
    description:
      "Deterministic systems engineering studio developing on-device AI vision and zero-knowledge status verification engines.",
    images: ["/logo.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.css"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}

'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './ability.module.css';

type App = {
  slug: string;
  name: string;
  tagline: string;
  desc: string;
  lineage: string;
  ref: string;
  accent: string;
  status: 'live' | 'beta';
  rating?: string;
  playUrl?: string;
};

const APPS: App[] = [
  {
    slug: 'gravity-time',
    name: 'ABILITY: Gravity & Time',
    tagline: '중력의 힘으로 시간을 통제한다',
    desc: '포커스 세션을 하나의 우주적 사건으로 바꾸는 타이머. 클래식 / 포모도로 / 인터벌 세 가지 시간 모드와, 화면이 꺼져도 유지되는 백그라운드 알림으로 몰입을 지켜줍니다.',
    lineage: 'WESTERN / SF LINEAGE',
    ref: 'ABILITY_01',
    accent: '#7B6CFF',
    status: 'live',
    rating: '4.8★',
    playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.timer',
  },
  {
    slug: 'daoxin',
    name: 'ABILITY: DaoXin (도심)',
    tagline: '마음을 수행하고, 성장을 기록한다',
    desc: '일상의 습관을 "정신 수행"으로 재정의하는 도가풍 수행 앱. 수묵화 질감의 미니멀 UI 위에서 기록이 쌓일수록 내공이 차오르고, 경지가 오릅니다. 메인 / 통계 / 관리 탭으로 하루의 리듬을 정리합니다.',
    lineage: 'EASTERN / CULTIVATION LINEAGE',
    ref: 'ABILITY_02',
    accent: '#3E8F6E',
    status: 'live',
    rating: '5.0★',
    playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.daoxin',
  },
];

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && (setVisible(true), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useReveal();
  return (
    <div ref={ref} className={`${styles.revealOnScroll} ${visible ? styles.visible : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function AbilityHub() {
  return (
    <div className={styles.page}>
      <div className={styles.gridBg} />

      <header className={styles.header}>
        <nav className={`${styles.wrap} ${styles.nav}`}>
          <Link href="/" className={`${styles.logo} ${styles.mono}`}>
            <span className={styles.dot} />
            RyuisLabs
          </Link>
          <div className={`${styles.navLinks} ${styles.mono}`}>
            <a href="/landing">PRODUCTS</a>
            <span className={styles.crumbSep}> / </span>
            <span className={styles.crumb}>ABILITY SERIES</span>
          </div>
        </nav>
      </header>

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={`${styles.eyebrow} ${styles.mono}`}>PRODUCT LINE / ABILITY</div>
        <h1>모든 형태의 숙련을,<br />도구로 번역합니다.</h1>
        <p className={styles.sub}>
          우주의 물리 법칙이든 도가의 수행이든 — 몰입이 향하는 방향은 다르지만 그 구조는 같습니다.
          ABILITY는 서로 다른 세계관 위에서, 같은 원리로 작동하는 숙련의 도구들을 만듭니다.
        </p>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <Reveal>
          <div className={styles.cardGrid}>
            {APPS.map((app) => (
              <div
                key={app.slug}
                className={`${styles.card} ${app.status === 'beta' ? styles.cardBeta : ''}`}
                style={{ ['--accent' as string]: app.accent }}
              >
                <div className={styles.cardTop}>
                  <span className={`${styles.ref} ${styles.mono}`}>{app.ref}</span>
                  {app.status === 'live' ? (
                    <span className={`${styles.rating} ${styles.mono}`}>{app.rating}</span>
                  ) : (
                    <span className={`${styles.betaBadge} ${styles.mono}`}>CLOSED BETA</span>
                  )}
                </div>

                <div className={`${styles.lineage} ${styles.mono}`}>{app.lineage}</div>
                <h3>{app.name}</h3>
                <p className={styles.tagline}>{app.tagline}</p>
                <p className={styles.desc}>{app.desc}</p>

                <div className={styles.cardActions}>
                  {app.status === 'live' ? (
                    <>
                      <Link href={`/landing/ability/${app.slug}`} className={`${styles.btn} ${styles.btnPrimary} ${styles.mono}`}>
                        자세히 보기 →
                      </Link>
                      <a
                        href={app.playUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}
                      >
                        Play 스토어
                      </a>
                    </>
                  ) : (
                    <span className={`${styles.btn} ${styles.btnDisabled} ${styles.mono}`}>준비 중</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <footer className={`${styles.wrap} ${styles.footer} ${styles.mono}`}>
        <div>RYUIS LABS © 2026 (주)류이즈랩스. All rights reserved.</div>
        <Link href="/" className={styles.backLink}>← RyuisLabs 홈으로</Link>
      </footer>
    </div>
  );
}
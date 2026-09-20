'use client';

import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import styles from './landing.module.css';

type Entry = {
  key: string;
  kind: 'series' | 'single';
  name: string;
  tagline: string;
  desc: string;
  ref: string;
  accent: string;
  status: 'live' | 'soon';
  rating?: string;
  href: string;
  external?: boolean;
};

const ENTRIES: Entry[] = [
  {
    key: 'ability',
    kind: 'series',
    name: 'ABILITY',
    tagline: '모든 형태의 숙련을 위한 도구',
    desc: '중력을 다루는 SF적 몰입 도구부터, 도가 수행을 담은 동양적 습관 도구까지 — 서로 다른 세계관 위에서 같은 원리로 작동하는 제품 라인.',
    ref: 'PRODUCT_LINE',
    accent: '#7B6CFF',
    status: 'live',
    href: '/ability',
  },
  {
    key: 'memoflow',
    kind: 'single',
    name: 'MemoFlow',
    tagline: '가볍게 쓰고, 바로 내보내는 메모',
    desc: '떠오른 생각을 즉시 캡처하고 체크리스트로 정리해, 원하는 형식으로 바로 내보냅니다. 군더더기 없는 단일 목적 유틸리티.',
    ref: 'STANDALONE_TOOL',
    accent: '#4FA8E0',
    status: 'live',
    rating: '5.0★',
    href: '/landing/memoflow',
  },
  {
    key: 'seedvault',
    kind: 'single',
    name: 'SeedVault',
    tagline: '단 하나의 볼트, 군사급 암호화',
    desc: 'Argon2id + AES-256-GCM으로 모든 비밀을 하나의 금고에 재잠금합니다. 자동 잠금 뷰어와 QR 공유까지 — 제로 지식 원칙 위에서 설계된 보안 유틸리티.',
    ref: 'STANDALONE_TOOL',
    accent: '#22D3C4',
    status: 'soon',
    href: '/landing/seedvault',
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

export default function ProductsLanding() {
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
            <span className={styles.crumb}>PRODUCTS</span>
          </div>
        </nav>
      </header>

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={`${styles.eyebrow} ${styles.mono}`}>PRODUCT SHOWCASE</div>
        <h1>하나의 원리로,<br />여러 형태의 도구를 만듭니다.</h1>
        <p className={styles.sub}>
          RyuisLabs는 하나의 제품에 머무르지 않습니다. 몰입을 다루는 시리즈, 기록을 다루는 유틸리티,
          비밀을 다루는 보안 도구 — 각자 다른 문제를 풀지만, 감성이 아닌 인과로 설계한다는 원칙은
          동일합니다.
        </p>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <Reveal>
          <div className={styles.cardGrid}>
            {ENTRIES.map((e) => {
              const Wrapper = e.href ? (e.external ? 'a' : Link) : 'div';
              const wrapperProps: Record<string, unknown> = e.href
                ? e.external
                  ? { href: e.href, target: '_blank', rel: 'noopener noreferrer' }
                  : { href: e.href }
                : {};
              return (
                <Wrapper
                  href={'#'} key={e.key}
                  className={`${styles.card} ${e.status === 'soon' ? styles.cardSoon : ''} ${e.href ? styles.cardLinkable : ''}`}
                  style={{ ['--accent' as string]: e.accent }}
                  {...wrapperProps}                >
                  <div className={styles.cardTop}>
                    <span className={`${styles.ref} ${styles.mono}`}>{e.ref}</span>
                    {e.status === 'live' ? (
                      e.rating && <span className={`${styles.rating} ${styles.mono}`}>{e.rating}</span>
                    ) : (
                      <span className={`${styles.soonBadge} ${styles.mono}`}>출시 임박</span>
                    )}
                  </div>

                  <h3>{e.name}</h3>
                  <p className={styles.tagline}>{e.tagline}</p>
                  <p className={styles.desc}>{e.desc}</p>

                  <div className={`${styles.cardFoot} ${styles.mono}`}>
                    {e.href ? (e.kind === 'series' ? '시리즈 보기 →' : e.external ? 'Play 스토어 →' : '자세히 보기 →') : '곧 공개'}
                  </div>
                </Wrapper>
              );
            })}
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
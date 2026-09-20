'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './detail.module.css';

type Feature = { title: string; desc: string };

type AppDetail = {
  slug: string;
  name: string;
  altName?: string;
  tagline: string;
  lineage: string;
  ref: string;
  accent: string;
  rating: string;
  reviews: string;
  downloads: string;
  intro: string;
  features: Feature[];
  screenshots: string[];
  playUrl: string;
  otherSlug: string;
  otherName: string;
};

const APPS: Record<string, AppDetail> = {
  'gravity-time': {
    slug: 'gravity-time',
    name: 'ABILITY: Gravity & Time',
    tagline: '중력의 힘으로 시간을 통제한다',
    lineage: 'WESTERN / SF LINEAGE',
    ref: 'ABILITY_01',
    accent: '#7B6CFF',
    rating: '4.8★',
    reviews: '22 REVIEWS',
    downloads: '100+ DOWNLOADS',
    intro:
      '평범한 타이머는 지겹습니다. 포커스 세션을 하나의 우주적 사건으로 바꾸는 딥 그레이 UI 위에서, 시간은 흐르는 게 아니라 당깁니다. 클래식·포모도로·인터벌 세 가지 모드로 몰입의 형태를 고를 수 있습니다.',
    features: [
      { title: 'THREE TEMPORAL MODES', desc: '클래식(단일 몰입) · 포모도로(집중/휴식 순환) · 인터벌(고강도 세션)까지, 상황에 맞는 시간 구조를 선택합니다.' },
      { title: 'BACKGROUND STABILITY', desc: '네이티브 엔진 기반으로 화면이 꺼지거나 앱이 백그라운드에 있어도 알림이 정확히 도달합니다.' },
      { title: 'GRAVITY STATISTICS', desc: '통제한 모든 순간이 기록되어, 몰입 패턴의 변화를 통계로 확인할 수 있습니다.' },
      { title: 'ENERGY RECHARGE', desc: '에너지가 소진되면 짧은 충전(광고)으로 다시 시간을 통제할 힘을 얻습니다.' },
    ],
    screenshots: [
      'https://play-lh.googleusercontent.com/86Fu083_e4Eo2wio9AdqoanK6tPfN2xBd9V5Y2hRVZsf82I2mcQQNc68Bp6zzY2TJ98Cu0v6_NUaQPKkLuyAmQ=w526-h296',
      'https://play-lh.googleusercontent.com/pjgMakvPJDNk__x7lrK8zSAr5L4bNhYl_s-UEIDgW4dbkZO8KFqQcbzAiNmTtD6HX6_t7km7tLSM_Dr6ljJwmw=w526-h296',
      'https://play-lh.googleusercontent.com/qZA6ZuU4CVWZhsSWKhyALmjSeRjEVM4INokQl2RD143VGsK1Ea-WktW3ZJAyNjt3vpDGAYeFn5pDgS2oVG4JAQ=w526-h296',
    ],
    playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.timer',
    otherSlug: 'daoxin',
    otherName: 'ABILITY: DaoXin',
  },
  daoxin: {
    slug: 'daoxin',
    name: 'ABILITY: DaoXin',
    altName: '도심',
    tagline: '마음을 수행하고, 성장을 기록한다',
    lineage: 'EASTERN / CULTIVATION LINEAGE',
    ref: 'ABILITY_02',
    accent: '#3E8F6E',
    rating: '5.0★',
    reviews: '8 REVIEWS',
    downloads: '10+ DOWNLOADS',
    intro:
      '"마음을 수행하여 높은 경지로 오른다." 일상의 습관과 기록을 정신 수행으로 재정의하는 도가풍 생산성 앱. 수묵화와 서예 질감의 미니멀 UI 위에서, 매일의 기록이 내공이 되고 경지가 됩니다.',
    features: [
      { title: 'CULTIVATION LOG', desc: '하루의 할 일을 "정신 수행"으로 기록하고, 수행이 쌓일수록 내공이 자랍니다.' },
      { title: 'RANK SYSTEM', desc: '꾸준함을 기준으로 범인(凡人)에서 신선(神仙)에 이르는 경지를 오릅니다.' },
      { title: 'INSIGHTS (NOTES)', desc: '수행 중 떠오른 깨달음을 기록해 자신만의 지혜서를 만들어갑니다.' },
      { title: 'CONSTELLATION STATS', desc: '진행 상황을 밤하늘의 별자리처럼 시각화해 성장의 궤적을 한눈에 봅니다.' },
    ],
    screenshots: [
      'https://play-lh.googleusercontent.com/T8kBoNBDstKoF_4CX7XK15lTGLxSJ3zfPEFJcxOWGxB9Ed3QYifnNacq32FBEQY7vgDtn6tBn7ZJJnzS-85snzM=w526-h296',
      'https://play-lh.googleusercontent.com/CLfnd5If-sU1GKFt_tJQN4N77CPIrX1XuHacEYRfsxDbc5xCvJzndO2pBNgfhZfKUgCM1OWgH1vr8QT0YxS4Dw=w526-h296',
      'https://play-lh.googleusercontent.com/OB6XQygro900xg37i_Rt58EeIdfIW67yYhrHIOImDWd8SQmre1pHupbXZqJZsMidR4mOPWVMSjvLAjoSqxFj=w526-h296',
    ],
    playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.daoxin',
    otherSlug: 'gravity-time',
    otherName: 'ABILITY: Gravity & Time',
  },
};

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

export default function AppDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const app = APPS[slug];

  if (!app) {
    notFound();
  }

  return (
    <div className={styles.page} style={{ ['--accent' as string]: app.accent }}>
      <div className={styles.gridBg} />

      <header className={styles.header}>
        <nav className={`${styles.wrap} ${styles.nav}`}>
          <Link href="/" className={`${styles.logo} ${styles.mono}`}>
            <span className={styles.dot} />
            RyuisLabs
          </Link>
          <div className={`${styles.navLinks} ${styles.mono}`}>
            <Link href="/landing/ability">ABILITY</Link>
            <span className={styles.crumbSep}>/</span>
            <span className={styles.crumb}>{app.slug.toUpperCase()}</span>
          </div>
        </nav>
      </header>

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={`${styles.refRow} ${styles.mono}`}>
          <span>{app.ref}</span>
          <span className={styles.sep}>·</span>
          <span>{app.lineage}</span>
        </div>
        <h1>
          {app.name}
          {app.altName && <span className={styles.altName}> ({app.altName})</span>}
        </h1>
        <p className={styles.tagline}>{app.tagline}</p>

        <div className={`${styles.statRow} ${styles.mono}`}>
          <span className={styles.stat}>{app.rating}</span>
          <span className={styles.statSep}>/</span>
          <span className={styles.stat}>{app.reviews}</span>
          <span className={styles.statSep}>/</span>
          <span className={styles.stat}>{app.downloads}</span>
        </div>

        <p className={styles.intro}>{app.intro}</p>

        <div className={styles.ctaRow}>
          <a href={app.playUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary} ${styles.mono}`}>
            Play 스토어에서 설치
          </a>
          <Link href="/landing/ability" className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}>
            ← 시리즈로 돌아가기
          </Link>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <Reveal className={styles.featureGrid}>
          {app.features.map((f) => (
            <div key={f.title} className={styles.feature}>
              <div className={`${styles.featureTitle} ${styles.mono}`}>{f.title}</div>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      <section className={`${styles.wrap} ${styles.shotSection}`}>
        <Reveal>
          <div className={`${styles.eyebrow} ${styles.mono}`}>SCREENSHOTS</div>
          <div className={styles.shotRow}>
            {app.screenshots.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={i} src={src} alt={`${app.name} screenshot ${i + 1}`} className={styles.shot} loading="lazy" />
            ))}
          </div>
        </Reveal>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <Reveal className={styles.crossCard}>
          <div>
            <div className={`${styles.eyebrow} ${styles.mono}`}>MORE FROM ABILITY</div>
            <h3>{app.otherName}</h3>
          </div>
          <Link href={`/landing/ability/${app.otherSlug}`} className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}>
            살펴보기 →
          </Link>
        </Reveal>
      </section>

      <footer className={`${styles.wrap} ${styles.footer} ${styles.mono}`}>
        <div>RYUIS LABS © 2026 (주)류이즈랩스. All rights reserved.</div>
        <Link href="/" className={styles.backLink}>← RyuisLabs 홈으로</Link>
      </footer>
    </div>
  );
}
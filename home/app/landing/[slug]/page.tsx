'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import styles from './detail.module.css';

type Feature = { title: string; desc: string };

type ProductDetail = {
  slug: string;
  name: string;
  tagline: string;
  ref: string;
  accent: string;
  status: 'live' | 'soon';
  rating?: string;
  reviews?: string;
  downloads?: string;
  intro: string;
  features: Feature[];
  screenshots: string[];
  playUrl?: string;
};

const PRODUCTS: Record<string, ProductDetail> = {
  memoflow: {
    slug: 'memoflow',
    name: 'MemoFlow: Simple Draft & Notes',
    tagline: '가볍게 쓰고, 바로 내보내는 메모',
    ref: 'STANDALONE_TOOL',
    accent: '#4FA8E0',
    status: 'live',
    rating: '5.0★',
    reviews: '17 REVIEWS',
    downloads: '100+ DOWNLOADS',
    intro:
      '떠오른 생각을 놓치지 않도록 설계된 가벼운 메모 앱입니다. 짧은 메모, 체크리스트, 긴 초안까지 — 형식에 맞춰 쓰는 방식을 바꿀 수 있습니다. 데이터는 서버가 아닌 기기 안에만 남습니다.',
    features: [
      { title: 'VERSATILE NOTE TYPES', desc: '일반 메모, 체크리스트형 할 일, 긴 글을 위한 드래프트 모드까지 하나의 앱에서 전환할 수 있습니다.' },
      { title: 'DRAFT MODE', desc: '군더더기 없는 화면에서 몰입해서 긴 글을 쓸 수 있는 전용 작성 모드입니다.' },
      { title: 'FLEXIBLE EXPORT', desc: 'HTML, Markdown, JSON 등 원하는 포맷으로 바로 내보내 다른 도구와 자유롭게 연결됩니다.' },
      { title: 'PRIVACY FIRST', desc: '기록은 기기 안에만 저장되고, 서버로 전송되지 않습니다.' },
    ],
    screenshots: [
      'https://play-lh.googleusercontent.com/jrcR_jY9AQaFVbs2iLIFwj-mLl4bdc4jZbGSnL0cxEUUj4LJlDF4TdRL0mxzdjbBjg0WzL5ngR9SjxSBRMyQJg=w526-h296',
      'https://play-lh.googleusercontent.com/syasY42uMcMrfrlcO0i3z5iBVOHzLPysE64h-u6Y6USiMDGNTWhqi-ZCn7Yt4ir-q1ue6PMUb_Um6vp0Js14ZJE=w526-h296',
      'https://play-lh.googleusercontent.com/rQu_0iyyI6kuw4kFrq9Fa2CfielRUVyQxWvjA1bFsdN_3n4s62PIVNOCg06_5pXUiTVMgksVwMnUYHDxB1nzVA=w526-h296',
      'https://play-lh.googleusercontent.com/L0KvPUk5NbAAoqyKhVsZoo_gCBOv8myER6RyKSS-M9nX8_50gukf34zWdxdylFU5sevlwYrzzWhMt7dpnr1b6A=w526-h296',
    ],
    playUrl: 'https://play.google.com/store/apps/details?id=com.yoonjongryu.memo',
  },
  seedvault: {
    slug: 'seedvault',
    name: 'SeedVault: Encrypted Vault',
    tagline: '단 하나의 볼트, 군사급 암호화',
    ref: 'STANDALONE_TOOL',
    accent: '#22D3C4',
    status: 'soon',
    intro:
      'Argon2id + AES-256-GCM으로 모든 비밀을 하나의 금고에 재잠금합니다. 시드 문구, 개인 키, 민감한 텍스트를 기기 안에서만 암호화하고, 서버에는 아무것도 남기지 않는 제로 지식 원칙 위에서 설계됐습니다.',
    features: [
      { title: 'ONE VAULT FOR EVERY SECRET', desc: '시드 문구, 개인 키, 토큰 등 흩어진 비밀 정보를 하나의 금고에 정리해 보관합니다.' },
      { title: 'MILITARY-GRADE ENCRYPTION', desc: 'Argon2id 키 유도와 AES-256-GCM 암호화로 모든 항목을 이중으로 재잠금합니다.' },
      { title: 'AUTO-LOCKING VIEWER', desc: '일정 시간이 지나면 뷰어가 자동으로 잠겨, 열어둔 채 방치되는 상황을 막습니다.' },
      { title: 'SHARE VIA QR', desc: '필요할 때만 QR 코드로 비밀을 안전하게 공유하고, 그 외에는 완전히 격리된 상태로 유지합니다.' },
    ],
    screenshots: [],
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

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params.slug === 'string' ? params.slug : '';
  const product = PRODUCTS[slug];

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.page} style={{ ['--accent' as string]: product.accent }}>
      <div className={styles.gridBg} />

      <header className={styles.header}>
        <nav className={`${styles.wrap} ${styles.nav}`}>
          <Link href="/" className={`${styles.logo} ${styles.mono}`}>
            <span className={styles.dot} />
            RyuisLabs
          </Link>
          <div className={`${styles.navLinks} ${styles.mono}`}>
            <Link href="/landing">PRODUCTS</Link>
            <span className={styles.crumbSep}>/</span>
            <span className={styles.crumb}>{product.slug.toUpperCase()}</span>
          </div>
        </nav>
      </header>

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={`${styles.refRow} ${styles.mono}`}>
          <span>{product.ref}</span>
          {product.status === 'soon' && (
            <>
              <span className={styles.sep}>·</span>
              <span className={styles.soonTag}>출시 임박</span>
            </>
          )}
        </div>
        <h1>{product.name}</h1>
        <p className={styles.tagline}>{product.tagline}</p>

        {product.status === 'live' && (
          <div className={`${styles.statRow} ${styles.mono}`}>
            <span className={styles.stat}>{product.rating}</span>
            <span className={styles.statSep}>/</span>
            <span className={styles.stat}>{product.reviews}</span>
            <span className={styles.statSep}>/</span>
            <span className={styles.stat}>{product.downloads}</span>
          </div>
        )}

        <p className={styles.intro}>{product.intro}</p>

        <div className={styles.ctaRow}>
          {product.status === 'live' ? (
            <a href={product.playUrl} target="_blank" rel="noopener noreferrer" className={`${styles.btn} ${styles.btnPrimary} ${styles.mono}`}>
              Play 스토어에서 설치
            </a>
          ) : (
            <span className={`${styles.btn} ${styles.btnDisabled} ${styles.mono}`}>곧 공개됩니다</span>
          )}
          <Link href="/landing" className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}>
            ← 전체 제품으로 돌아가기
          </Link>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <Reveal className={styles.featureGrid}>
          {product.features.map((f) => (
            <div key={f.title} className={styles.feature}>
              <div className={`${styles.featureTitle} ${styles.mono}`}>{f.title}</div>
              <p className={styles.featureDesc}>{f.desc}</p>
            </div>
          ))}
        </Reveal>
      </section>

      {product.screenshots.length > 0 && (
        <section className={`${styles.wrap} ${styles.shotSection}`}>
          <Reveal>
            <div className={`${styles.eyebrow} ${styles.mono}`}>SCREENSHOTS</div>
            <div className={styles.shotRow}>
              {product.screenshots.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt={`${product.name} screenshot ${i + 1}`} className={styles.shot} loading="lazy" />
              ))}
            </div>
          </Reveal>
        </section>
      )}

      <footer className={`${styles.wrap} ${styles.footer} ${styles.mono}`}>
        <div>RYUIS LABS © 2026 (주)류이즈랩스. All rights reserved.</div>
        <Link href="/" className={styles.backLink}>← RyuisLabs 홈으로</Link>
      </footer>
    </div>
  );
}
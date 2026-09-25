'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import styles from './detail.module.css';
import SubHeader from '@/components/common/SubHeader';
import Reveal from '@/components/common/Reveal';
import { ABILITY_APPS } from '@/constants/products';
import { COMPANY_INFO } from '@/constants/company';

export default function AppDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const app = ABILITY_APPS[slug];

  if (!app) {
    notFound();
  }

  return (
    <div className={styles.page} style={{ ['--accent' as string]: app.accent }}>
      <div className={styles.gridBg} />

      <SubHeader
        breadcrumbs={[
          { label: 'PRODUCTS', href: '/landing' },
          { label: 'ABILITY', href: '/landing/ability' },
          { label: app.slug.toUpperCase() },
        ]}
      />

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
          <a
            href={app.playUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.btn} ${styles.btnPrimary} ${styles.mono}`}
          >
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
              <img
                key={i}
                src={src}
                alt={`${app.name} screenshot ${i + 1}`}
                className={styles.shot}
                loading="lazy"
              />
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
          <Link
            href={`/landing/ability/${app.otherSlug}`}
            className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}
          >
            살펴보기 →
          </Link>
        </Reveal>
      </section>

      <footer className={`${styles.wrap} ${styles.footer} ${styles.mono}`}>
        <div>
          {COMPANY_INFO.name.toUpperCase()} © {COMPANY_INFO.established} {COMPANY_INFO.legalName}. All rights reserved.
        </div>
        <Link href="/" className={styles.backLink}>
          ← RyuisLabs 홈으로
        </Link>
      </footer>
    </div>
  );
}
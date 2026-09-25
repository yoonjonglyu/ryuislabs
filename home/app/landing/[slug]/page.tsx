'use client';

import Link from 'next/link';
import { notFound, useParams } from 'next/navigation';
import styles from './detail.module.css';
import SubHeader from '@/components/common/SubHeader';
import Reveal from '@/components/common/Reveal';
import { STANDALONE_PRODUCTS } from '@/constants/products';
import { COMPANY_INFO } from '@/constants/company';

export default function ProductDetailPage() {
  const params = useParams();
  const slug = typeof params?.slug === 'string' ? params.slug : '';
  const product = STANDALONE_PRODUCTS[slug];

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.page} style={{ ['--accent' as string]: product.accent }}>
      <div className={styles.gridBg} />

      <SubHeader
        breadcrumbs={[
          { label: 'PRODUCTS', href: '/landing' },
          { label: product.slug.toUpperCase() },
        ]}
      />

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
          {product.status === 'live' && product.playUrl ? (
            <a
              href={product.playUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.btn} ${styles.btnPrimary} ${styles.mono}`}
            >
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
                <img
                  key={i}
                  src={src}
                  alt={`${product.name} screenshot ${i + 1}`}
                  className={styles.shot}
                  loading="lazy"
                />
              ))}
            </div>
          </Reveal>
        </section>
      )}

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
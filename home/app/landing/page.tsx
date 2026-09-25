import Link from 'next/link';
import styles from './landing.module.css';
import SubHeader from '@/components/common/SubHeader';
import Reveal from '@/components/common/Reveal';
import { CATALOG_ENTRIES } from '@/constants/products';
import { COMPANY_INFO } from '@/constants/company';

export default function ProductsLanding() {
  return (
    <div className={styles.page}>
      <div className={styles.gridBg} />

      <SubHeader breadcrumbs={[{ label: 'PRODUCTS' }]} />

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={`${styles.eyebrow} ${styles.mono}`}>PRODUCT SHOWCASE</div>
        <h1>
          하나의 원리로,
          <br />
          여러 형태의 도구를 만듭니다.
        </h1>
        <p className={styles.sub}>
          RyuisLabs는 하나의 제품에 머무르지 않습니다. 몰입을 다루는 시리즈, 기록을 다루는 유틸리티,
          비밀을 다루는 보안 도구 — 각자 다른 문제를 풀지만, 감성이 아닌 인과로 설계한다는 원칙은
          동일합니다.
        </p>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <Reveal>
          <div className={styles.cardGrid}>
            {CATALOG_ENTRIES.map((entry) => {
              const isExternal = entry.external;
              const cardContent = (
                <>
                  <div className={styles.cardTop}>
                    <span className={`${styles.ref} ${styles.mono}`}>{entry.ref}</span>
                    {entry.status === 'live' ? (
                      entry.rating && <span className={`${styles.rating} ${styles.mono}`}>{entry.rating}</span>
                    ) : (
                      <span className={`${styles.soonBadge} ${styles.mono}`}>출시 임박</span>
                    )}
                  </div>

                  <h3>{entry.name}</h3>
                  <p className={styles.tagline}>{entry.tagline}</p>
                  <p className={styles.desc}>{entry.desc}</p>

                  <div className={`${styles.cardFoot} ${styles.mono}`}>
                    {entry.href
                      ? entry.kind === 'series'
                        ? '시리즈 보기 →'
                        : isExternal
                        ? 'Play 스토어 →'
                        : '자세히 보기 →'
                      : '곧 공개'}
                  </div>
                </>
              );

              const cardClasses = `${styles.card} ${entry.status === 'soon' ? styles.cardSoon : ''} ${
                entry.href ? styles.cardLinkable : ''
              }`;

              if (entry.href) {
                if (isExternal) {
                  return (
                    <a
                      key={entry.key}
                      href={entry.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={cardClasses}
                      style={{ ['--accent' as string]: entry.accent }}
                    >
                      {cardContent}
                    </a>
                  );
                }
                return (
                  <Link
                    key={entry.key}
                    href={entry.href}
                    className={cardClasses}
                    style={{ ['--accent' as string]: entry.accent }}
                  >
                    {cardContent}
                  </Link>
                );
              }

              return (
                <div
                  key={entry.key}
                  className={cardClasses}
                  style={{ ['--accent' as string]: entry.accent }}
                >
                  {cardContent}
                </div>
              );
            })}
          </div>
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
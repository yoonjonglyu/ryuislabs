import Link from 'next/link';
import styles from './ability.module.css';
import SubHeader from '@/components/common/SubHeader';
import Reveal from '@/components/common/Reveal';
import { ABILITY_APP_LIST } from '@/constants/products';
import { COMPANY_INFO } from '@/constants/company';

export default function AbilityHub() {
  return (
    <div className={styles.page}>
      <div className={styles.gridBg} />

      <SubHeader
        breadcrumbs={[
          { label: 'PRODUCTS', href: '/landing' },
          { label: 'ABILITY SERIES' },
        ]}
      />

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={styles.heroHead}>
          <div className={`${styles.eyebrow} ${styles.mono}`}>PRODUCT LINE / ABILITY</div>
          <h1>
            모든 형태의 숙련을,
            <br />
            도구로 번역합니다.
          </h1>
          <p className={styles.sub}>
            우주의 물리 법칙이든 도가의 수행이든 — 몰입이 향하는 방향은 다르지만 그 구조는 같습니다.
            ABILITY는 서로 다른 세계관 위에서, 같은 원리로 작동하는 숙련의 도구들을 만듭니다.
          </p>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <Reveal>
          <div className={styles.cardGrid}>
            {ABILITY_APP_LIST.map((app) => (
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
                      <Link
                        href={`/landing/ability/${app.slug}`}
                        className={`${styles.btn} ${styles.btnPrimary} ${styles.mono}`}
                      >
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
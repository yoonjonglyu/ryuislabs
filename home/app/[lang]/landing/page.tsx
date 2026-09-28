import Link from 'next/link';
import styles from '@/app/landing/landing.module.css';
import SubHeader from '@/components/common/SubHeader';
import Reveal from '@/components/common/Reveal';
import { LOCALES, normalizeLocale } from '@/constants/i18n';
import { getProductsData } from '@/constants/products';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

interface ProductsLandingProps {
  params: Promise<{ lang: string }>;
}

export default async function ProductsLanding({ params }: ProductsLandingProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const productsData = getProductsData(locale);
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);

  return (
    <div className={styles.page}>
      <div className={styles.gridBg} />

      <SubHeader breadcrumbs={[{ label: ui.nav.products }]} locale={locale} />

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={styles.heroHead}>
          <div className={`${styles.eyebrow} ${styles.mono}`}>{ui.landing.badge}</div>
          <h1>
            {ui.landing.titleLine1}
            <br />
            {ui.landing.titleLine2}
          </h1>
          <p className={styles.sub}>{ui.landing.desc}</p>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <Reveal>
          <div className={styles.cardGrid}>
            {productsData.catalogEntries.map((entry) => {
              const isExternal = entry.external;
              const cardContent = (
                <>
                  <div className={styles.cardTop}>
                    <span className={`${styles.ref} ${styles.mono}`}>{entry.ref}</span>
                    {entry.status === 'live' ? (
                      entry.rating && <span className={`${styles.rating} ${styles.mono}`}>{entry.rating}</span>
                    ) : (
                      <span className={`${styles.soonBadge} ${styles.mono}`}>{ui.landing.soonBadge}</span>
                    )}
                  </div>

                  <h3>{entry.name}</h3>
                  <p className={styles.tagline}>{entry.tagline}</p>
                  <p className={styles.desc}>{entry.desc}</p>

                  <div className={`${styles.cardFoot} ${styles.mono}`}>
                    {entry.href
                      ? entry.kind === 'series'
                        ? ui.landing.viewSeries
                        : isExternal
                        ? ui.landing.viewStore
                        : ui.landing.viewDetail
                      : ui.landing.comingSoon}
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
          {companyData.companyInfo.name.toUpperCase()} © {companyData.companyInfo.established} {companyData.companyInfo.legalName}. {ui.footer.allRightsReserved}
        </div>
        <Link href={`/${locale}`} className={styles.backLink}>
          {ui.footer.backToHome}
        </Link>
      </footer>
    </div>
  );
}

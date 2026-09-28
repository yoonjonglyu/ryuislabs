import Link from 'next/link';
import styles from '@/app/landing/ability/ability.module.css';
import SubHeader from '@/components/common/SubHeader';
import Reveal from '@/components/common/Reveal';
import { LOCALES, normalizeLocale } from '@/constants/i18n';
import { getProductsData } from '@/constants/products';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

interface AbilityHubProps {
  params: Promise<{ lang: string }>;
}

export default async function AbilityHub({ params }: AbilityHubProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const productsData = getProductsData(locale);
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);

  return (
    <div className={styles.page}>
      <div className={styles.gridBg} />

      <SubHeader
        breadcrumbs={[
          { label: ui.nav.products, href: `/${locale}/landing` },
          { label: 'ABILITY SERIES' },
        ]}
        locale={locale}
      />

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={styles.heroHead}>
          <div className={`${styles.eyebrow} ${styles.mono}`}>{ui.abilityHub.badge}</div>
          <h1>
            {ui.abilityHub.titleLine1}
            <br />
            {ui.abilityHub.titleLine2}
          </h1>
          <p className={styles.sub}>{ui.abilityHub.desc}</p>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <Reveal>
          <div className={styles.cardGrid}>
            {productsData.abilityAppList.map((app) => (
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
                    <span className={`${styles.betaBadge} ${styles.mono}`}>{ui.abilityHub.closedBeta}</span>
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
                        href={`/${locale}/landing/ability/${app.slug}`}
                        className={`${styles.btn} ${styles.btnPrimary} ${styles.mono}`}
                      >
                        {ui.abilityHub.btnDetail}
                      </Link>
                      <a
                        href={app.playUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}
                      >
                        {ui.abilityHub.btnStore}
                      </a>
                    </>
                  ) : (
                    <span className={`${styles.btn} ${styles.btnDisabled} ${styles.mono}`}>
                      {ui.abilityHub.btnSoon}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <footer className={`${styles.wrap} ${styles.footer} ${styles.mono}`}>
        <div>
          {companyData.companyInfo.name.toUpperCase()} © {companyData.companyInfo.established}{' '}
          {companyData.companyInfo.legalName}. {ui.footer.allRightsReserved}
        </div>
        <Link href={`/${locale}`} className={styles.backLink}>
          {ui.footer.backToHome}
        </Link>
      </footer>
    </div>
  );
}

import type { Metadata } from 'next';
import Link from 'next/link';
import styles from '@/app/landing/ability/ability.module.css';
import SubHeader from '@/components/common/SubHeader';
import Reveal from '@/components/common/Reveal';
import { LOCALES, normalizeLocale } from '@/constants/i18n';
import { getProductsData } from '@/constants/products';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';
import { SITE_URL, getAlternateLanguages, getBreadcrumbSchema } from '@/constants/seo';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

interface AbilityHubProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: AbilityHubProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const ui = getUiTranslations(locale);

  const title = `ABILITY SERIES // ${ui.abilityHub.titleLine1}`;
  const description = ui.abilityHub.desc;
  const canonicalUrl = `${SITE_URL}/${locale}/landing/ability`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: getAlternateLanguages('/landing/ability'),
    },
    openGraph: {
      title: `${title} | RyuisLabs`,
      description,
      url: canonicalUrl,
      locale,
    },
    twitter: {
      title: `${title} | RyuisLabs`,
      description,
    },
  };
}

export default async function AbilityHub({ params }: AbilityHubProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const productsData = getProductsData(locale);
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'RyuisLabs', url: `${SITE_URL}/${locale}` },
    { name: ui.nav.products, url: `${SITE_URL}/${locale}/landing` },
    { name: 'ABILITY SERIES', url: `${SITE_URL}/${locale}/landing/ability` },
  ]);

  const collectionSchema = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'ABILITY SERIES - RyuisLabs',
    description: ui.abilityHub.desc,
    url: `${SITE_URL}/${locale}/landing/ability`,
    mainEntity: {
      '@type': 'ItemList',
      itemListElement: productsData.abilityAppList.map((app, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: app.name,
        description: app.tagline,
        url: `${SITE_URL}/${locale}/landing/ability/${app.slug}`,
      })),
    },
  };

  const jsonLd = [breadcrumbSchema, collectionSchema];

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
                    <span className={`${styles.soonBadge} ${styles.mono}`}>
                      {ui.abilityHub.closedBeta}
                    </span>
                  )}
                </div>

                <h3>
                  {app.name}
                  {app.altName && <span className={styles.altName}> ({app.altName})</span>}
                </h3>
                <p className={styles.lineage}>{app.lineage}</p>
                <p className={styles.tagline}>{app.tagline}</p>

                <div className={styles.cardActions}>
                  <Link
                    href={`/${locale}/landing/ability/${app.slug}`}
                    className={`${styles.cardBtn} ${styles.cardBtnPrimary} ${styles.mono}`}
                  >
                    {ui.abilityHub.btnDetail}
                  </Link>
                  {app.status === 'live' && app.playUrl ? (
                    <a
                      href={app.playUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${styles.cardBtn} ${styles.cardBtnGhost} ${styles.mono}`}
                    >
                      {ui.abilityHub.btnStore}
                    </a>
                  ) : (
                    <span className={`${styles.cardBtn} ${styles.cardBtnDisabled} ${styles.mono}`}>
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

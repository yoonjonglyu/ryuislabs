import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '@/app/landing/ability/[slug]/detail.module.css';
import SubHeader from '@/components/common/SubHeader';
import Reveal from '@/components/common/Reveal';
import { LOCALES, normalizeLocale } from '@/constants/i18n';
import { getProductsData } from '@/constants/products';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';

export function generateStaticParams() {
  const slugs = ['gravity-time', 'daoxin'];
  return LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

interface AppDetailPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export default async function AppDetailPage({ params }: AppDetailPageProps) {
  const { lang, slug } = await params;
  const locale = normalizeLocale(lang);
  const productsData = getProductsData(locale);
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);

  const app = productsData.abilityApps[slug];

  if (!app) {
    notFound();
  }

  return (
    <div className={styles.page} style={{ ['--accent' as string]: app.accent }}>
      <div className={styles.gridBg} />

      <SubHeader
        breadcrumbs={[
          { label: ui.nav.products, href: `/${locale}/landing` },
          { label: 'ABILITY', href: `/${locale}/landing/ability` },
          { label: app.slug.toUpperCase() },
        ]}
        locale={locale}
      />

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={styles.heroHead}>
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
              {ui.detail.installPlayStore}
            </a>
            <Link href={`/${locale}/landing/ability`} className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}>
              {ui.detail.backToSeries}
            </Link>
          </div>
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
          <div className={`${styles.eyebrow} ${styles.mono}`}>{ui.detail.screenshots}</div>
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
            <div className={`${styles.eyebrow} ${styles.mono}`}>{ui.detail.moreFromAbility}</div>
            <h3>{app.otherName}</h3>
          </div>
          <Link
            href={`/${locale}/landing/ability/${app.otherSlug}`}
            className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}
          >
            {ui.detail.inspect}
          </Link>
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

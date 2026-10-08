import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '@/app/landing/ability/[slug]/detail.module.css';
import SubHeader from '@/components/common/SubHeader';
import Reveal from '@/components/common/Reveal';
import { LOCALES, normalizeLocale } from '@/constants/i18n';
import { getProductsData } from '@/constants/products';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';
import {
  SITE_URL,
  getAlternateLanguages,
  getBreadcrumbSchema,
  getSoftwareApplicationSchema,
  getFaqSchema,
} from '@/constants/seo';

export function generateStaticParams() {
  const slugs = ['gravity-time', 'daoxin'];
  return LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

interface AppDetailPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({ params }: AppDetailPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = normalizeLocale(lang);
  const productsData = getProductsData(locale);
  const app = productsData.abilityApps[slug];

  if (!app) {
    return { title: 'App Not Found' };
  }

  const title = `${app.name} (${app.lineage}) — ${app.tagline}`;
  const description = app.intro || app.tagline;
  const canonicalUrl = `${SITE_URL}/${locale}/landing/ability/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: getAlternateLanguages(`/landing/ability/${slug}`),
    },
    openGraph: {
      title: `${title} | RyuisLabs`,
      description,
      url: canonicalUrl,
      locale,
      images: app.screenshots?.[0] ? [{ url: app.screenshots[0] }] : undefined,
    },
    twitter: {
      title: `${title} | RyuisLabs`,
      description,
      images: app.screenshots?.[0] ? [app.screenshots[0]] : undefined,
    },
  };
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

  const pageUrl = `${SITE_URL}/${locale}/landing/ability/${slug}`;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'RyuisLabs', url: `${SITE_URL}/${locale}` },
    { name: ui.nav.products, url: `${SITE_URL}/${locale}/landing` },
    { name: 'ABILITY', url: `${SITE_URL}/${locale}/landing/ability` },
    { name: app.name, url: pageUrl },
  ]);

  const softwareSchema = getSoftwareApplicationSchema(
    {
      name: app.name,
      description: app.intro,
      operatingSystem: 'Android',
      applicationCategory: 'ProductivityApplication',
      playUrl: app.playUrl,
      rating: app.rating,
      reviews: app.reviews,
      features: app.features,
    },
    pageUrl
  );

  const appFaqSchema = getFaqSchema([
    {
      question: `${app.name}의 주요 컨셉과 설계 철학은 무엇인가요?`,
      answer: `${app.lineage}. ${app.intro} ${app.features.map((f) => `${f.title}: ${f.desc}`).join(' ')}`,
    },
    {
      question: `${app.name}은 어디서 설치할 수 있나요?`,
      answer: `Google Play 스토어에서 공식 배포되고 있으며, 백그라운드 안정성과 기기 내 데이터 보존을 제공합니다.`,
    },
  ]);

  const jsonLd = [breadcrumbSchema, softwareSchema, appFaqSchema];

  return (
    <div className={styles.page} style={{ ['--accent' as string]: app.accent }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
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
            <article key={f.title} className={styles.feature}>
              <h3 className={`${styles.featureTitle} ${styles.mono}`}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </article>
          ))}
        </Reveal>
      </section>

      {app.screenshots.length > 0 && (
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
      )}

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

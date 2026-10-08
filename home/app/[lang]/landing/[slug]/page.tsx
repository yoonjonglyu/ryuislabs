import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '@/app/landing/[slug]/detail.module.css';
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
  const slugs = ['memoflow', 'seedvault'];
  return LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

interface ProductDetailPageProps {
  params: Promise<{ lang: string; slug: string }>;
}

export async function generateMetadata({ params }: ProductDetailPageProps): Promise<Metadata> {
  const { lang, slug } = await params;
  const locale = normalizeLocale(lang);
  const productsData = getProductsData(locale);
  const product = productsData.standaloneProducts[slug];

  if (!product) {
    return { title: 'Product Not Found' };
  }

  const title = `${product.name} — ${product.tagline}`;
  const description = product.intro || product.tagline;
  const canonicalUrl = `${SITE_URL}/${locale}/landing/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: getAlternateLanguages(`/landing/${slug}`),
    },
    openGraph: {
      title: `${title} | RyuisLabs`,
      description,
      url: canonicalUrl,
      locale,
      images: product.screenshots?.[0] ? [{ url: product.screenshots[0] }] : undefined,
    },
    twitter: {
      title: `${title} | RyuisLabs`,
      description,
      images: product.screenshots?.[0] ? [product.screenshots[0]] : undefined,
    },
  };
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { lang, slug } = await params;
  const locale = normalizeLocale(lang);
  const productsData = getProductsData(locale);
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);

  const product = productsData.standaloneProducts[slug];

  if (!product) {
    notFound();
  }

  const pageUrl = `${SITE_URL}/${locale}/landing/${slug}`;

  const breadcrumbSchema = getBreadcrumbSchema([
    { name: 'RyuisLabs', url: `${SITE_URL}/${locale}` },
    { name: ui.nav.products, url: `${SITE_URL}/${locale}/landing` },
    { name: product.name, url: pageUrl },
  ]);

  const softwareSchema = getSoftwareApplicationSchema(
    {
      name: product.name,
      description: product.intro,
      operatingSystem: 'Android',
      applicationCategory: slug === 'seedvault' ? 'SecurityApplication' : 'ProductivityApplication',
      playUrl: product.playUrl,
      rating: product.rating,
      reviews: product.reviews,
      features: product.features,
    },
    pageUrl
  );

  const productFaqSchema = getFaqSchema([
    {
      question: `${product.name}의 핵심 목적과 작동 방식은 무엇인가요?`,
      answer: `${product.intro} ${product.features.map((f) => `${f.title}: ${f.desc}`).join(' ')}`,
    },
    {
      question: `${product.name}의 데이터는 어떻게 보관되나요?`,
      answer: '데이터는 외부 원격 서버로 전송되지 않으며, 기기 내 로컬 샌드박스에만 보관됩니다.',
    },
  ]);

  const jsonLd = [breadcrumbSchema, softwareSchema, productFaqSchema];

  return (
    <div className={styles.page} style={{ ['--accent' as string]: product.accent }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.gridBg} />

      <SubHeader
        breadcrumbs={[
          { label: ui.nav.products, href: `/${locale}/landing` },
          { label: product.slug.toUpperCase() },
        ]}
        locale={locale}
      />

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div className={styles.heroHead}>
          <div className={`${styles.refRow} ${styles.mono}`}>
            <span>{product.ref}</span>
            {product.status === 'soon' && (
              <>
                <span className={styles.sep}>·</span>
                <span className={styles.soonTag}>{ui.detail.soonTag}</span>
              </>
            )}
          </div>
          <h1>{product.name}</h1>
          <p className={styles.tagline}>{product.tagline}</p>

          {product.status === 'live' && (product.rating || product.reviews || product.downloads) && (
            <div className={`${styles.statRow} ${styles.mono}`}>
              {product.rating && <span className={styles.stat}>{product.rating}</span>}
              {product.rating && (product.reviews || product.downloads) && <span className={styles.statSep}>/</span>}
              {product.reviews && <span className={styles.stat}>{product.reviews}</span>}
              {product.reviews && product.downloads && <span className={styles.statSep}>/</span>}
              {product.downloads && <span className={styles.stat}>{product.downloads}</span>}
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
                {ui.detail.installPlayStore}
              </a>
            ) : (
              <span className={`${styles.btn} ${styles.btnDisabled} ${styles.mono}`}>
                {ui.detail.comingSoonNotice}
              </span>
            )}
            <Link href={`/${locale}/landing`} className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}>
              {ui.detail.backToProducts}
            </Link>
          </div>
        </div>
      </section>

      <section className={`${styles.wrap} ${styles.section}`}>
        <Reveal className={styles.featureGrid}>
          {product.features.map((f) => (
            <article key={f.title} className={styles.feature}>
              <h3 className={`${styles.featureTitle} ${styles.mono}`}>{f.title}</h3>
              <p className={styles.featureDesc}>{f.desc}</p>
            </article>
          ))}
        </Reveal>
      </section>

      {product.screenshots.length > 0 && (
        <section className={`${styles.wrap} ${styles.shotSection}`}>
          <Reveal>
            <div className={`${styles.eyebrow} ${styles.mono}`}>{ui.detail.screenshots}</div>
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

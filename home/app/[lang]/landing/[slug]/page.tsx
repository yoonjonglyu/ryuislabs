import Link from 'next/link';
import { notFound } from 'next/navigation';
import styles from '@/app/landing/[slug]/detail.module.css';
import SubHeader from '@/components/common/SubHeader';
import Reveal from '@/components/common/Reveal';
import { LOCALES, normalizeLocale } from '@/constants/i18n';
import { getProductsData } from '@/constants/products';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';

export function generateStaticParams() {
  const slugs = ['memoflow', 'seedvault'];
  return LOCALES.flatMap((lang) => slugs.map((slug) => ({ lang, slug })));
}

interface ProductDetailPageProps {
  params: Promise<{ lang: string; slug: string }>;
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

  return (
    <div className={styles.page} style={{ ['--accent' as string]: product.accent }}>
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

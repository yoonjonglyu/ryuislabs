import type { Metadata } from 'next';
import styles from '@/app/ryuislabs.module.css';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Status from '@/components/sections/Status';
import Founder from '@/components/sections/Founder';
import Faq from '@/components/sections/Faq';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { LOCALES, normalizeLocale } from '@/constants/i18n';
import {
  SITE_URL,
  SEO_DATA,
  getAlternateLanguages,
  getOrganizationSchema,
  getWebsiteSchema,
  getFaqSchema,
  getSoftwareApplicationSchema,
} from '@/constants/seo';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { lang } = await params;
  const locale = normalizeLocale(lang);
  const data = SEO_DATA[locale];

  return {
    title: data.title,
    description: data.description,
    keywords: data.keywords,
    alternates: {
      canonical: `${SITE_URL}/${locale}`,
      languages: getAlternateLanguages(''),
    },
    openGraph: {
      title: data.title,
      description: data.description,
      url: `${SITE_URL}/${locale}`,
      locale: locale,
    },
    twitter: {
      title: data.title,
      description: data.description,
    },
  };
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);

  const organizationSchema = getOrganizationSchema();
  const websiteSchema = getWebsiteSchema(locale);
  const faqSchema = getFaqSchema(SEO_DATA[locale].faq);
  const flagshipSoftwareSchema = getSoftwareApplicationSchema(
    {
      name: 'RYUis : STATUS',
      description:
        'Privacy-preserving state verification engine using on-device AI vision to objectively prove focus and physical training without surveillance.',
      applicationCategory: 'HealthAndFitnessApplication',
      features: [
        { title: 'Focus Vision', desc: 'Eye tracking pure focus time computation' },
        { title: 'Physical Vision', desc: 'Pose estimation joint angle repetition counting' },
        { title: 'Zero-Knowledge Log', desc: 'Immediate video deletion with signed stat preservation' },
      ],
    },
    `${SITE_URL}/${locale}`
  );

  const jsonLd = [organizationSchema, websiteSchema, flagshipSoftwareSchema, faqSchema];

  return (
    <div className={styles.page}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className={styles.gridBg} />
      <Header locale={locale} />
      <Hero locale={locale} />
      <Status locale={locale} />
      <Founder locale={locale} />
      <Faq locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}

import styles from '@/app/ryuislabs.module.css';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Status from '@/components/sections/Status';
import Founder from '@/components/sections/Founder';
import Contact from '@/components/sections/Contact';
import Footer from '@/components/sections/Footer';
import { LOCALES, normalizeLocale } from '@/constants/i18n';

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

interface PageProps {
  params: Promise<{ lang: string }>;
}

export default async function Page({ params }: PageProps) {
  const { lang } = await params;
  const locale = normalizeLocale(lang);

  return (
    <div className={styles.page}>
      <div className={styles.gridBg} />
      <Header locale={locale} />
      <Hero locale={locale} />
      <Status locale={locale} />
      <Founder locale={locale} />
      <Contact locale={locale} />
      <Footer locale={locale} />
    </div>
  );
}

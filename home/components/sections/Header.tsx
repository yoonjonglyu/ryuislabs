import Link from 'next/link';
import styles from '@/app/ryuislabs.module.css';
import { Locale, DEFAULT_LOCALE } from '@/constants/i18n';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';
import LanguageSwitcher from '@/components/common/LanguageSwitcher';

interface HeaderProps {
  locale?: Locale;
}

export function Header({ locale = DEFAULT_LOCALE }: HeaderProps) {
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);

  return (
    <header className={styles.header}>
      <nav className={`${styles.wrap} ${styles.nav}`}>
        <Link href={`/${locale}`} className={`${styles.logo} ${styles.mono}`}>
          <span className={styles.dot} />
          {companyData.companyInfo.name}
        </Link>
        <div className={`${styles.navLinks} ${styles.mono}`}>
          <Link href={`/${locale}/landing`}>{ui.nav.products}</Link>
          <a href="#status">{ui.nav.status}</a>
          <a href="#founder">{ui.nav.founder}</a>
          <a href="#contact">{ui.nav.contact}</a>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </nav>
    </header>
  );
}

export default Header;

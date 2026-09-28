import styles from '@/app/ryuislabs.module.css';
import { Locale, DEFAULT_LOCALE } from '@/constants/i18n';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';

interface FooterProps {
  locale?: Locale;
}

export function Footer({ locale = DEFAULT_LOCALE }: FooterProps) {
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);
  const company = companyData.companyInfo;

  return (
    <footer className={`${styles.wrap} ${styles.footer} ${styles.mono}`}>
      <div>
        {company.name.toUpperCase()} © {company.established} {company.legalName}. {ui.footer.allRightsReserved}
      </div>
      <div className={styles.statusTicker}>
        <span className={styles.dot} />
        {ui.footer.statusTicker}
      </div>
    </footer>
  );
}

export default Footer;

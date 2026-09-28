import styles from '@/app/ryuislabs.module.css';
import { Reveal } from '@/components/common/Reveal';
import { Locale, DEFAULT_LOCALE } from '@/constants/i18n';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';

interface ContactProps {
  locale?: Locale;
}

export function Contact({ locale = DEFAULT_LOCALE }: ContactProps) {
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);

  return (
    <section id="contact" className={styles.wrap}>
      <Reveal className={styles.contactBox}>
        <div>
          <h3>
            {ui.contact.title}
            <br />
            {ui.contact.titleSub}
          </h3>
          <p>{ui.contact.desc}</p>
        </div>
        <a href={`mailto:${companyData.companyInfo.email}`} className={`${styles.contactEmail} ${styles.mono}`}>
          {companyData.companyInfo.email}
        </a>
      </Reveal>
    </section>
  );
}

export default Contact;

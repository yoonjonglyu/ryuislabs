import styles from '@/app/ryuislabs.module.css';
import { Reveal } from '@/components/common/Reveal';
import { Locale, DEFAULT_LOCALE } from '@/constants/i18n';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';

interface StatusProps {
  locale?: Locale;
}

export function Status({ locale = DEFAULT_LOCALE }: StatusProps) {
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);

  return (
    <section id="status" className={`${styles.wrap} ${styles.section}`}>
      <Reveal className={styles.sectionHead}>
        <div className={`${styles.eyebrow} ${styles.mono}`}>{ui.status.badge}</div>
        <h2>
          {ui.status.title}
          <br />
          {ui.status.titleSub}
        </h2>
        <p>{ui.status.desc}</p>
      </Reveal>

      <Reveal className={styles.moduleGrid}>
        {companyData.statusModules.map((module) => (
          <div key={module.ref} className={styles.module}>
            <div className={`${styles.ref} ${styles.mono}`}>{module.ref}</div>
            <h3>{module.title}</h3>
            <p>{module.description}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className={styles.targetRow}>
        {companyData.targetAudience.map((item) => (
          <div key={item.label} className={styles.target}>
            <div className={`${styles.label} ${styles.mono}`}>{item.label}</div>
            <h4>{item.role}</h4>
            <p>{item.description}</p>
          </div>
        ))}
      </Reveal>

      <Reveal className={styles.tierList}>
        {companyData.businessTiers.map((tier) => (
          <div key={tier.tag} className={styles.tier}>
            <div className={`${styles.tag} ${styles.mono}`}>{tier.tag}</div>
            <div className={styles.desc}>
              <b>{tier.title}</b> — {tier.description}
            </div>
          </div>
        ))}
      </Reveal>
    </section>
  );
}

export default Status;

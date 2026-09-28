import styles from '@/app/ryuislabs.module.css';
import { Reveal } from '@/components/common/Reveal';
import { Locale, DEFAULT_LOCALE } from '@/constants/i18n';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';

interface FounderProps {
  locale?: Locale;
}

export function Founder({ locale = DEFAULT_LOCALE }: FounderProps) {
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);
  const founder = companyData.founderProfile;

  return (
    <section id="founder" className={`${styles.wrap} ${styles.section}`}>
      <Reveal className={styles.sectionHead}>
        <div className={`${styles.eyebrow} ${styles.mono}`}>{ui.founder.badge}</div>
        <h2>{ui.founder.title}</h2>
        <p>{ui.founder.desc}</p>
      </Reveal>

      <Reveal className={styles.founderCard}>
        <div className={styles.founderTop}>
          <span className={`${styles.founderBadge} ${styles.mono}`}>{founder.role}</span>
          <span className={`${styles.founderBadge} ${styles.mono}`}>{founder.location}</span>
        </div>
        <h3>{founder.name}</h3>
        <p className={styles.bio}>{founder.bio}</p>

        <div className={styles.systemList}>
          {founder.systems.map((system) => (
            <a
              key={system.name}
              href={system.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.sysRow} ${styles.linkable}`}
            >
              <div>
                <div className={`${styles.name} ${styles.mono}`}>{system.name}</div>
                <div className={styles.desc}>{system.desc}</div>
              </div>
              <div className={`${styles.arrow} ${styles.mono}`}>→</div>
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}

export default Founder;

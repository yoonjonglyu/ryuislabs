import styles from '@/app/ryuislabs.module.css';
import { COMPANY_INFO } from '@/constants/company';

export function Footer() {
  return (
    <footer className={`${styles.wrap} ${styles.footer} ${styles.mono}`}>
      <div>
        {COMPANY_INFO.name.toUpperCase()} © {COMPANY_INFO.established} {COMPANY_INFO.legalName}. All rights reserved.
      </div>
      <div className={styles.statusTicker}>
        <span className={styles.dot} />
        ALL SYSTEMS NOMINAL
      </div>
    </footer>
  );
}

export default Footer;

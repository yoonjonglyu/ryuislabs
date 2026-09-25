import Link from 'next/link';
import styles from '@/app/ryuislabs.module.css';
import { COMPANY_INFO } from '@/constants/company';

export function Header() {
  return (
    <header className={styles.header}>
      <nav className={`${styles.wrap} ${styles.nav}`}>
        <div className={`${styles.logo} ${styles.mono}`}>
          <span className={styles.dot} />
          {COMPANY_INFO.name}
        </div>
        <div className={`${styles.navLinks} ${styles.mono}`}>
          <Link href="/landing">PRODUCTS</Link>
          <a href="#status">STATUS</a>
          <a href="#founder">FOUNDER</a>
          <a href="#contact">CONTACT</a>
        </div>
      </nav>
    </header>
  );
}

export default Header;

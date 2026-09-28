import Link from 'next/link';
import styles from './SubHeader.module.css';
import { Locale, DEFAULT_LOCALE } from '@/constants/i18n';
import LanguageSwitcher from './LanguageSwitcher';

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface SubHeaderProps {
  breadcrumbs: BreadcrumbItem[];
  locale?: Locale;
}

export function SubHeader({ breadcrumbs, locale = DEFAULT_LOCALE }: SubHeaderProps) {
  return (
    <header className={styles.header}>
      <nav className={`${styles.wrap} ${styles.nav}`}>
        <Link href={`/${locale}`} className={`${styles.logo} ${styles.mono}`}>
          <span className={styles.dot} />
          RyuisLabs
        </Link>
        <div className={`${styles.navLinks} ${styles.mono}`}>
          <div className={styles.breadcrumbs}>
            {breadcrumbs.map((crumb, idx) => {
              const isLast = idx === breadcrumbs.length - 1;
              return (
                <span key={idx} style={{ display: 'inline-flex', alignItems: 'center' }}>
                  {idx > 0 && <span className={styles.crumbSep}>/</span>}
                  {isLast || !crumb.href ? (
                    <span className={styles.crumb}>{crumb.label}</span>
                  ) : (
                    <Link href={crumb.href}>{crumb.label}</Link>
                  )}
                </span>
              );
            })}
          </div>
          <LanguageSwitcher currentLocale={locale} />
        </div>
      </nav>
    </header>
  );
}

export default SubHeader;

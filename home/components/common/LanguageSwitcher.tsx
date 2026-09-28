'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Locale, LOCALES, LOCALE_CONFIG } from '@/constants/i18n';
import styles from './LanguageSwitcher.module.css';

interface LanguageSwitcherProps {
  currentLocale: Locale;
}

export function LanguageSwitcher({ currentLocale }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname() || `/${currentLocale}`;

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // 현재 경로에서 locale 세그먼트 치환 함수
  const getTargetUrl = (targetLocale: Locale) => {
    // pathname 예: /ko, /ko/landing, /en/landing/ability 등
    const segments = pathname.split('/').filter(Boolean);
    if (segments.length > 0 && LOCALES.includes(segments[0] as Locale)) {
      segments[0] = targetLocale;
    } else {
      segments.unshift(targetLocale);
    }
    return `/${segments.join('/')}`;
  };

  const currentMeta = LOCALE_CONFIG[currentLocale] || LOCALE_CONFIG.ko;

  return (
    <div className={styles.langSwitcher} ref={containerRef}>
      <button
        type="button"
        className={styles.triggerBtn}
        onClick={() => setIsOpen((prev) => !prev)}
        aria-label="Select Language"
        aria-expanded={isOpen}
      >
        <span className={styles.globeIcon}>🌐</span>
        <span>{currentMeta.shortLabel}</span>
        <span className={`${styles.arrow} ${isOpen ? styles.arrowOpen : ''}`}>▼</span>
      </button>

      {isOpen && (
        <div className={styles.dropdown}>
          {LOCALES.map((loc) => {
            const isActive = loc === currentLocale;
            const meta = LOCALE_CONFIG[loc];
            return (
              <Link
                key={loc}
                href={getTargetUrl(loc)}
                className={`${styles.langOption} ${isActive ? styles.langOptionActive : ''}`}
                onClick={() => setIsOpen(false)}
              >
                <span>{meta.label}</span>
                {isActive && <span className={styles.activeDot} />}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default LanguageSwitcher;

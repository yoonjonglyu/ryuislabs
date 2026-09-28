'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import styles from '@/app/ryuislabs.module.css';
import { Locale, DEFAULT_LOCALE } from '@/constants/i18n';
import { getCompanyTranslation } from '@/constants/translations/company';
import { getUiTranslations } from '@/constants/translations/ui';

interface HeroProps {
  locale?: Locale;
}

function subscribeReducedMotion(callback: () => void) {
  const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
  mq.addEventListener('change', callback);
  return () => mq.removeEventListener('change', callback);
}

function getReducedMotionSnapshot() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

function getServerReducedMotionSnapshot() {
  return false;
}

export function Hero({ locale = DEFAULT_LOCALE }: HeroProps) {
  const companyData = getCompanyTranslation(locale);
  const ui = getUiTranslations(locale);
  const bootLines = companyData.bootLines;
  const companyInfo = companyData.companyInfo;

  const reducedMotion = useSyncExternalStore(
    subscribeReducedMotion,
    getReducedMotionSnapshot,
    getServerReducedMotionSnapshot
  );

  const [bootHtml, setBootHtml] = useState('');
  const [bootDone, setBootDone] = useState(false);

  useEffect(() => {
    if (reducedMotion) {
      return;
    }

    let li = 0;
    let ci = 0;
    let out = '';
    let timer: ReturnType<typeof setTimeout>;

    const render = (text: string, showCursor: boolean) => {
      const withOk = text.replace(/\[OK\]/g, `<span class="${styles.ok}">[OK]</span>`);
      setBootHtml(withOk + (showCursor ? `<span class="${styles.bootCursor}"></span>` : ''));
    };

    const tick = () => {
      if (li >= bootLines.length) {
        render(out, false);
        setBootDone(true);
        return;
      }
      const line = bootLines[li];
      if (ci <= line.length) {
        render(out + line.slice(0, ci), true);
        ci++;
        timer = setTimeout(tick, 14);
      } else {
        out += line + '\n';
        li++;
        ci = 0;
        timer = setTimeout(tick, 180);
      }
    };
    tick();

    return () => clearTimeout(timer);
  }, [reducedMotion, bootLines]);

  const heroVisible = bootDone || reducedMotion;

  // slogan 줄바꿈 지원
  const sloganLines = companyInfo.slogan.split('\n');

  return (
    <section className={`${styles.hero} ${styles.wrap}`}>
      <div className={styles.bootBox}>
        <div className={styles.bootHeader}>
          <span className={styles.terminalDot} />
          <span className={styles.terminalDot} />
          <span className={styles.terminalDot} />
          <span className={`${styles.bootTitle} ${styles.mono}`}>{ui.hero.terminalTitle}</span>
        </div>
        <div
          className={`${styles.bootLog} ${styles.mono}`}
          dangerouslySetInnerHTML={{ __html: reducedMotion ? '' : bootHtml }}
        />
      </div>

      <div className={styles.heroText}>
        <div
          className={`${styles.eyebrow} ${styles.heroReveal}`}
          style={{ opacity: heroVisible ? 1 : 0, transitionDelay: '0.05s' }}
        >
          {ui.hero.badge}
        </div>
        <h1
          className={styles.heroReveal}
          style={{ opacity: heroVisible ? 1 : 0, transitionDelay: '0.15s' }}
        >
          {sloganLines.map((line, idx) => (
            <span key={idx}>
              {line}
              {idx < sloganLines.length - 1 && <br />}
            </span>
          ))}
        </h1>
        <p
          className={`${styles.sub} ${styles.heroReveal}`}
          style={{ opacity: heroVisible ? 1 : 0, transitionDelay: '0.28s' }}
        >
          {companyInfo.subcopy}
        </p>
        <div
          className={`${styles.ctaRow} ${styles.heroReveal}`}
          style={{ opacity: heroVisible ? 1 : 0, transitionDelay: '0.4s' }}
        >
          <a href="#status" className={`${styles.btn} ${styles.btnPrimary} ${styles.mono}`}>
            {ui.hero.ctaExplore}
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}>
            {ui.hero.ctaInquire}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
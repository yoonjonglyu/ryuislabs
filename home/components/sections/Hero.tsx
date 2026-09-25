'use client';

import { useEffect, useState, useSyncExternalStore } from 'react';
import styles from '@/app/ryuislabs.module.css';
import { BOOT_LINES, COMPANY_INFO } from '@/constants/company';

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

export function Hero() {
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
      if (li >= BOOT_LINES.length) {
        render(out, false);
        setBootDone(true);
        return;
      }
      const line = BOOT_LINES[li];
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
  }, [reducedMotion]);

  const heroVisible = bootDone || reducedMotion;

  return (
    <section className={`${styles.hero} ${styles.wrap}`}>
      <div className={styles.bootBox}>
        <div className={styles.bootHeader}>
          <span className={styles.terminalDot} />
          <span className={styles.terminalDot} />
          <span className={styles.terminalDot} />
          <span className={`${styles.bootTitle} ${styles.mono}`}>TERMINAL // SYSTEM_INIT</span>
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
          ESTABLISHED {COMPANY_INFO.established} · SYSTEM ARCHITECTURE
        </div>
        <h1
          className={styles.heroReveal}
          style={{ opacity: heroVisible ? 1 : 0, transitionDelay: '0.15s' }}
        >
          모든 성취의 이면에는,
          <br />
          치열한 과정이 존재합니다.
        </h1>
        <p
          className={`${styles.sub} ${styles.heroReveal}`}
          style={{ opacity: heroVisible ? 1 : 0, transitionDelay: '0.28s' }}
        >
          {COMPANY_INFO.subcopy}
        </p>
        <div
          className={`${styles.ctaRow} ${styles.heroReveal}`}
          style={{ opacity: heroVisible ? 1 : 0, transitionDelay: '0.4s' }}
        >
          <a href="#status" className={`${styles.btn} ${styles.btnPrimary} ${styles.mono}`}>
            제품 살펴보기 — RYUis : STATUS
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}>
            비즈니스 문의
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
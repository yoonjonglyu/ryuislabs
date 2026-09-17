'use client';

import { useEffect, useRef, useState } from 'react';
import styles from './ryuislabs.module.css';

const BOOT_LINES = [
  'INITIALIZING RYUISLABS...',
  'LOADING CAUSALITY ENGINE... [OK]',
  'VERIFYING TRUST LAYER... [OK]',
  'ALL SYSTEMS NOMINAL',
];

function useRevealOnScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true);
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return { ref, visible };
}

function Reveal({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useRevealOnScroll();
  return (
    <div ref={ref} className={`${styles.revealOnScroll} ${visible ? styles.visible : ''} ${className}`}>
      {children}
    </div>
  );
}

export default function Page() {
  const [bootHtml, setBootHtml] = useState('');
  const [bootDone, setBootDone] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mq.matches);
    if (mq.matches) {
      setBootDone(true);
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
  }, []);

  const heroVisible = bootDone || reducedMotion;

  return (
    <div className={styles.page}>
      <div className={styles.gridBg} />

      <header className={styles.header}>
        <nav className={`${styles.wrap} ${styles.nav}`}>
          <div className={`${styles.logo} ${styles.mono}`}>
            <span className={styles.dot} />
            RyuisLabs
          </div>
          <div className={`${styles.navLinks} ${styles.mono}`}>
            <a href="#product">PRODUCT</a>
            <a href="#founder">FOUNDER</a>
            <a href="#contact">CONTACT</a>
          </div>
        </nav>
      </header>

      <section className={`${styles.hero} ${styles.wrap}`}>
        <div
          className={`${styles.bootLog} ${styles.mono}`}
          dangerouslySetInnerHTML={{ __html: reducedMotion ? '' : bootHtml }}
        />
        <div
          className={`${styles.eyebrow} ${styles.heroReveal}`}
          style={{ opacity: heroVisible ? 1 : 0, transitionDelay: '0.05s' }}
        >
          ESTABLISHED 2026 · SYSTEM ARCHITECTURE
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
          RyuisLabs는 감성이나 우연에 기대지 않고, 인과와 논리로 인간의 노력과 과정을 정밀하게
          기록합니다. 결과가 아닌 과정을, 증명 가능한 데이터로.
        </p>
        <div
          className={`${styles.ctaRow} ${styles.heroReveal}`}
          style={{ opacity: heroVisible ? 1 : 0, transitionDelay: '0.4s' }}
        >
          <a href="#product" className={`${styles.btn} ${styles.btnPrimary} ${styles.mono}`}>
            제품 살펴보기 — RYUis : STATUS
          </a>
          <a href="#contact" className={`${styles.btn} ${styles.btnGhost} ${styles.mono}`}>
            비즈니스 문의
          </a>
        </div>
      </section>

      <section id="product" className={`${styles.wrap} ${styles.section}`}>
        <Reveal className={styles.sectionHead}>
          <div className={`${styles.eyebrow} ${styles.mono}`}>FLAGSHIP MODULE / RYUis : STATUS</div>
          <h2>
            감시 없이 증명하는,
            <br />
            프라이버시 보존형 상태창
          </h2>
          <p>
            온디바이스 AI 비전이 시선과 관절 움직임을 기기 안에서만 분석하고, 원본 영상은 즉시
            폐기합니다. 남는 건 조작 불가능한 암호화 스탯뿐 — 얼굴도, 방 안 풍경도 서버로 나가지
            않습니다.
          </p>
        </Reveal>

        <Reveal className={styles.moduleGrid}>
          <div className={styles.module}>
            <div className={`${styles.ref} ${styles.mono}`}>MODULE_01 / FOCUS_VISION</div>
            <h3>시선 추적 몰입 검증</h3>
            <p>
              전면 카메라로 시선과 이탈 여부를 감지해 순수 몰입 시간(Pure Focus Time)을 산출합니다.
              영상은 기기 밖으로 나가지 않습니다.
            </p>
          </div>
          <div className={styles.module}>
            <div className={`${styles.ref} ${styles.mono}`}>MODULE_02 / PHYSICAL_VISION</div>
            <h3>관절 각도 동작 카운팅</h3>
            <p>
              Pose Estimation으로 운동 동작의 유효 각도를 분석해, 자가 신고가 아닌 검증된 수행
              횟수를 기록합니다.
            </p>
          </div>
          <div className={styles.module}>
            <div className={`${styles.ref} ${styles.mono}`}>MODULE_03 / ZERO_KNOWLEDGE_LOG</div>
            <h3>즉시 폐기, 스탯만 보존</h3>
            <p>
              원본 데이터는 연산 직후 파기되고, 암호화된 통계 벡터만 남아 제3자에게 조작 불가능한
              리포트로 전달됩니다.
            </p>
          </div>
        </Reveal>

        <Reveal className={styles.targetRow}>
          <div className={styles.target}>
            <div className={`${styles.label} ${styles.mono}`}>FOR_USER</div>
            <h4>수행 주체 — 수험생, 자기계발/홈트레이닝 유저</h4>
            <p>
              얼굴과 방을 노출하지 않고도 자신의 몰입과 수행을 스스로에게, 그리고 필요한 사람에게
              증명할 수 있습니다.
            </p>
          </div>
          <div className={styles.target}>
            <div className={`${styles.label} ${styles.mono}`}>FOR_THIRD_PARTY</div>
            <h4>신뢰 주체 — 학부모, PT 코치, 관리형 시설</h4>
            <p>
              실시간 감시 없이도 조작 불가능한 결과 리포트를 받아, 관계의 신뢰를 데이터로 확인할 수
              있습니다.
            </p>
          </div>
        </Reveal>

        <Reveal className={styles.tierList} >
          <div className={styles.tier}>
            <div className={`${styles.tag} ${styles.mono}`}>B2C</div>
            <div className={styles.desc}>
              <b>프리미엄 검증 구독</b> — 기본 상태창은 무료, AI 비전 검증 세션과 인증 프로필은
              구독형으로 제공합니다.
            </div>
          </div>
          <div className={styles.tier}>
            <div className={`${styles.tag} ${styles.mono}`}>B2B2C</div>
            <div className={styles.desc}>
              <b>제3자 증명 리포트</b> — 원본 영상 없이 검증된 결과만 학부모·코치에게 알림으로
              전달합니다.
            </div>
          </div>
          <div className={styles.tier}>
            <div className={`${styles.tag} ${styles.mono}`}>B2B</div>
            <div className={styles.desc}>
              <b>SDK / API 라이선스</b> — 스터디카페, 관리형 학원, 피트니스 시설이 자체 서비스에
              검증 엔진을 연동합니다.
            </div>
          </div>
        </Reveal>
      </section>

      <section id="founder" className={`${styles.wrap} ${styles.section}`}>
        <Reveal className={styles.sectionHead}>
          <div className={`${styles.eyebrow} ${styles.mono}`}>OPERATOR PROFILE</div>
          <h2>혼자, 그러나 전부</h2>
          <p>RyuisLabs는 아이디어 설계부터 구현까지 한 사람이 수행하는 1인 시스템입니다.</p>
        </Reveal>

        <Reveal className={styles.founderCard}>
          <div className={styles.founderTop}>
            <span className={`${styles.founderBadge} ${styles.mono}`}>FOUNDER / ENGINEER</span>
            <span className={`${styles.founderBadge} ${styles.mono}`}>SEOUL, KR</span>
          </div>
          <h3>류윤종</h3>
          <p className={styles.bio}>
            웹 소프트웨어 개발자 출신으로, AI 하네스 엔지니어링을 활용해 기획부터 구현까지
            단독으로 처리합니다. 명상, 철학, 심리학, 경제학을 오래 파온 개인적 탐구가 제품의 사고
            방식에 그대로 스며 있고, 현재는 법공부를 병행하며 제도권 결합에 필요한 소양을 쌓고
            있습니다.
          </p>

          <div className={styles.systemList}>
            <a
              href="https://yoonjonglyu.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.sysRow} ${styles.linkable}`}
            >
              <div>
                <div className={`${styles.name} ${styles.mono}`}>PORTFOLIO / ISA_ARCHIVE</div>
                <div className={styles.desc}>전체 프로젝트 아카이브 — 지금까지의 실행 기록</div>
              </div>
              <div className={`${styles.arrow} ${styles.mono}`}>→</div>
            </a>
            <a
              href="https://play.google.com/store/apps/dev?id=7405269184068017564"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.sysRow} ${styles.linkable}`}
            >
              <div>
                <div className={`${styles.name} ${styles.mono}`}>ABILITY_SERIES</div>
                <div className={styles.desc}>모든 형태의 숙련을 다루는 Android 앱 포트폴리오</div>
              </div>
              <div className={`${styles.arrow} ${styles.mono}`}>→</div>
            </a>
            <a
              href="https://asharyu-design-docs.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${styles.sysRow} ${styles.linkable}`}
            >
              <div>
                <div className={`${styles.name} ${styles.mono}`}>ASHARYU_DESIGN_SYSTEM</div>
                <div className={styles.desc}>
                  음양오행 철학을 UI/UX 토큰과 인터랙션으로 번역하는 디자인 시스템
                </div>
              </div>
              <div className={`${styles.arrow} ${styles.mono}`}>→</div>
            </a>
          </div>
        </Reveal>
      </section>

      <section id="contact" className={styles.wrap}>
        <Reveal className={styles.contactBox}>
          <div>
            <h3>
              제도권 결합, 기술 협력,
              <br />
              사업 문의를 기다립니다.
            </h3>
            <p>공공·민간 프로젝트 협업, B2B 라이선스, 투자 및 멘토링 문의 모두 환영합니다.</p>
          </div>
          <a href="mailto:content@ryuislabs.com" className={`${styles.contactEmail} ${styles.mono}`}>
            content@ryuislabs.com
          </a>
        </Reveal>
      </section>

      <footer className={`${styles.wrap} ${styles.footer} ${styles.mono}`}>
        <div>RYUIS LABS © 2026 (주)류이즈랩스. All rights reserved.</div>
        <div className={styles.statusTicker}>
          <span className={styles.dot} />
          ALL SYSTEMS NOMINAL
        </div>
      </footer>
    </div>
  );
}
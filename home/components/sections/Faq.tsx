import styles from '@/app/ryuislabs.module.css';
import { Reveal } from '@/components/common/Reveal';
import { Locale, DEFAULT_LOCALE } from '@/constants/i18n';
import { SEO_DATA } from '@/constants/seo';

interface FaqProps {
  locale?: Locale;
}

const FAQ_TITLES: Record<Locale, { badge: string; title: string; desc: string }> = {
  ko: {
    badge: 'SYSTEM SPEC // ARCHITECTURE_QA',
    title: '시스템 검증 및 아키텍처 FAQ',
    desc: '온디바이스 AI 비전 엔진과 제로 지식 원칙, 데이터 보존 및 비즈니스 연동에 대한 핵심 기술 질의응답입니다.',
  },
  en: {
    badge: 'SYSTEM SPEC // ARCHITECTURE_QA',
    title: 'System Verification & Architecture FAQ',
    desc: 'Technical questions and deterministic answers regarding on-device AI vision, zero-knowledge logging, and commercial integration.',
  },
  ja: {
    badge: 'SYSTEM SPEC // ARCHITECTURE_QA',
    title: 'システム検証＆アーキテクチャ FAQ',
    desc: 'オンデバイスAIビジョンエンジン、ゼロ知識原則、プライバシー保護及びビジネス連携に関する技術仕様Q&Aです。',
  },
  'zh-TW': {
    badge: 'SYSTEM SPEC // ARCHITECTURE_QA',
    title: '系統驗證與架構常見問答 (FAQ)',
    desc: '關於端側 AI 視覺引擎、零知識安全原則、資料留存與商業整合的核心技術問答。',
  },
};

export default function Faq({ locale = DEFAULT_LOCALE }: FaqProps) {
  const currentFaq = SEO_DATA[locale]?.faq || SEO_DATA.ko.faq;
  const header = FAQ_TITLES[locale] || FAQ_TITLES.ko;

  return (
    <section id="faq" className={`${styles.wrap} ${styles.section}`}>
      <Reveal className={styles.sectionHead}>
        <div className={`${styles.eyebrow} ${styles.mono}`}>{header.badge}</div>
        <h2>{header.title}</h2>
        <p>{header.desc}</p>
      </Reveal>

      <Reveal>
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '16px',
          }}
        >
          {currentFaq.map((item, index) => (
            <article
              key={index}
              style={{
                background: 'var(--bg-card)',
                border: '1px solid var(--border)',
                borderRadius: '4px',
                padding: '28px 24px',
                transition: 'border-color 0.2s ease, background 0.2s ease',
              }}
            >
              <div
                className={styles.mono}
                style={{
                  fontSize: '11px',
                  color: 'var(--accent)',
                  letterSpacing: '0.05em',
                  marginBottom: '10px',
                }}
              >
                QA_QUERY // {(index + 1).toString().padStart(2, '0')}
              </div>
              <h3
                style={{
                  fontSize: '16px',
                  fontWeight: 700,
                  marginBottom: '12px',
                  lineHeight: '1.45',
                  color: 'var(--text)',
                }}
              >
                {item.question}
              </h3>
              <p
                style={{
                  fontSize: '14px',
                  lineHeight: '1.7',
                  color: 'var(--text-dim)',
                  margin: 0,
                }}
              >
                {item.answer}
              </p>
            </article>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
